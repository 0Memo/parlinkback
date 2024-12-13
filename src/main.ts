/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();
import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as redis from 'redis';

let redisClient: redis.RedisClientType;

export default async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://parlink.vercel.app',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization', 'refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log('CORS configured.');

  redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    socket: {
      tls: true,
      reconnectStrategy: () => 1000,
      connectTimeout: 10000,
    },
  });
  await redisClient.connect();

  if (process.env.NODE_ENV === 'production') {
    console.log('Production mode detected.');
  }

  app.useGlobalPipes(new ValidationPipe());
  console.log('Global validation pipe configured.');

  app.use(compression());

  app.use(helmet());
  console.log('Helmet configured.');

  const config = new DocumentBuilder()
    .setTitle('alt-bootcamp')
    .setDescription('The alt-bootcamp API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log('Swagger documentation configured.');

  app.enableShutdownHooks();
  app.getHttpAdapter().getInstance().on('close', async () => {
    if (redisClient.isOpen) {
      await redisClient.disconnect();
      console.log('Redis client disconnected successfully.');
    }
  });

  app.getHttpAdapter().get('/health', (_, res) => res.send('OK'));

  await app.listen(process.env.PORT || 3000);
  console.log(`L'application écoute sur le port: ${await app.getUrl()}`);
}