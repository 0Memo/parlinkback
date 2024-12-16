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
import { Request, Response } from 'express';

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
    origin: [localhostUrl, ipv4Url, vercelUrl],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization', 'refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log(`CORS configurés.`);

  const expressApp = app.getHttpAdapter().getInstance();

  expressApp.options('*', (req: Request, res: Response) => {
    const origin = req.get('origin');
    const allowedOrigins = [localhostUrl, ipv4Url, vercelUrl];
  
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
      res.status(HttpStatus.FORBIDDEN).send(`Non autorisé par CORS`);
    }
  });

  app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
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
  
  if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
        res.redirect(`https://${req.header('host')}${req.url}`);
      } else {
        next();
      }
    });

    console.log(`Redirection HTTP vers HTTPS activée.`);
  }

  const config = new DocumentBuilder()
    .setTitle('alt-bootcamp')
    .setDescription(`The alt-bootcamp API description`)
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(`Documentation Swagger configurée.`);
  await app.listen(process.env.PORT || 3000);
  console.log(`L'application NestJS écoute sur le port 3000.`);
}

bootstrap();