/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();
import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filters';
import { CustomHttpExceptionFilter } from './filters/custom-exception.filters';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { TransformInterceptor } from './interceptors/transform.interceptors';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptors';
import helmet from 'helmet';
import * as redis from 'redis';
import { Request, Response } from 'express';

let redisClient: redis.RedisClientType;

async function bootstrap() {
  console.log(`Application NestJS en cours de démarrage...`);

  const app = await NestFactory.create(AppModule);
  console.log(`Application NestJS créée.`);

  const localhostUrl = process.env.LOCALHOST_URL;
  const ipv4Url = process.env.IPV4_URL;
  const vercelUrl = process.env.VERCEL_URL;

  app.use(helmet());
  console.log('Helmet configuré.');

  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [localhostUrl, ipv4Url, vercelUrl, 'https://parlinkback.up.railway.app'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`CORS blocked request from origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization', 'refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log(`CORS configurés.`);

  redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    socket: {
      tls: true,
      reconnectStrategy: () => 1000,
      connectTimeout: 30000,
    },
  });
  await redisClient.connect();
  redisClient.on('connect', () => console.log('Connected to Redis.'));
  redisClient.on('error', (err) => console.error('Redis connection error:', err));


  const expressApp = app.getHttpAdapter().getInstance();

  expressApp.options('*', (req: Request, res: Response) => {
    console.log(`CORS preflight for Origin: ${req.get('origin')}`);
    const origin = req.get('origin');
    const allowedOrigins = [localhostUrl, ipv4Url, vercelUrl, 'https://parlinkback.up.railway.app'];
  
    if (!origin || allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin || '*');
      res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS');
      res.header(
        'Access-Control-Allow-Headers', 
        'Content-Type, Origin, X-Requested-With, Accept, Authorization, refresh_token'
      );
      res.header('Access-Control-Expose-Headers', 'Authorization');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.sendStatus(HttpStatus.NO_CONTENT);
    } else {
      console.log(`CORS blocked for Origin: ${origin}`);
      res.status(HttpStatus.FORBIDDEN).send(`Non autorisé par CORS`);
    }
  });

  app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url} - Origin: ${req.headers.origin}`);
    next();
  });

  app.useGlobalPipes(new ValidationPipe());
  console.log(`Global validation pipe configurés.`);

  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor(), new SetHeadersInterceptor());
  console.log('Interceptors configurés.');

  app.useGlobalFilters(new HttpExceptionFilter(), new CustomHttpExceptionFilter());
  console.log('Global exception filters configurés.');

  app.use(compression());
  console.log(`Compression configurée.`);
  
  app.use((req, res, next) => {
    const proto = req.header('x-forwarded-proto');
    console.log(`Protocol: ${proto}`);
    if (proto !== 'https' && process.env.NODE_ENV === 'production') {
      return res.redirect(`https://${req.header('host')}${req.url}`);
    }
    next();
  });  

  const config = new DocumentBuilder()
    .setTitle('alt-bootcamp')
    .setDescription(`The alt-bootcamp API description`)
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(`Documentation Swagger configurée.`);

  app.enableShutdownHooks();
  app.getHttpAdapter().getInstance().on('close', async () => {
    if (redisClient.isOpen) {
      await redisClient.disconnect();
      console.log(`Redis client disconnected successfully.`);
    }
  });

  await app.listen(process.env.PORT || 3000);
  console.log(`L'application NestJS écoute sur le port 3000.`);
}

bootstrap();