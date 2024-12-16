/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, HttpStatus, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { createClient, RedisClientType } from '@redis/client';
import { HttpExceptionFilter } from './filters/http-exception.filters';
import { CustomHttpExceptionFilter } from './filters/custom-exception.filters';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { TransformInterceptor } from './interceptors/transform.interceptors';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptors';
import { Request, Response } from 'express';
import * as redis from 'redis';

let redisClient: RedisClientType;

async function bootstrap() {
  Logger.log('Starting NestJS application...');

  const app = await NestFactory.create(AppModule);

  const { LOCALHOST_URL, IPV4_URL, VERCEL_URL, REDIS_URL } = process.env;

  app.use(helmet());
  Logger.log('Helmet middleware enabled.');

  // CORS configuration
  const allowedOrigins = [
    LOCALHOST_URL,
    IPV4_URL,
    VERCEL_URL,
    'https://parlinkback.up.railway.app',
  ];
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        Logger.warn(`Blocked by CORS: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Authorization',
      'refresh_token',
    ],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  Logger.log('CORS configured.');

  redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    socket: {
      reconnectStrategy: () => 1000,
      connectTimeout: 30000,
    },
  });
  await redisClient.connect();

  if (process.env.NODE_ENV === 'production') {
    console.log(`Production mode detected.`);
  }

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor(), new SetHeadersInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter(), new CustomHttpExceptionFilter());
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('alt-bootcamp')
    .setDescription('API documentation for alt-bootcamp')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableShutdownHooks();
  app.getHttpAdapter().getInstance().on('close', async () => {
    if (redisClient.isOpen) {
      await redisClient.disconnect();
      console.log(`Redis client disconnected successfully.`);
    }
  });

  await app.listen(process.env.PORT || 3000);
  Logger.log(`Application listening on port ${process.env.PORT || 3000}`);
}

bootstrap();