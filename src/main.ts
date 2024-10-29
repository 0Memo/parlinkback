/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();
import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filters';
import { CustomHttpExceptionFilter } from './filters/custom-exception.filters';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { TransformInterceptor } from './interceptors/transform.interceptors';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptors';
import helmet from 'helmet';
import { Request, Response } from 'express';

async function createNestServer() {
  console.log('Application NestJS en cours de démarrage...');

  const app = await NestFactory.create(AppModule);
  console.log('Application NestJS créée.');

  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));
  console.log('Helmet configuré.');

  app.use(compression());
  console.log(`Compression configurée.`);

  app.useGlobalPipes(new ValidationPipe());
  console.log(`Global validation pipe configuré.`);

  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor(), new SetHeadersInterceptor());
  console.log(`Interceptors configurés.`);

  app.useGlobalFilters(new HttpExceptionFilter(), new CustomHttpExceptionFilter());
  console.log(`Global exception filters configurés.`);

  const corsOrigins = [
    process.env.LOCALHOST_URL,
    process.env.IPV4_URL,
    process.env.VERCEL_URL,
    process.env.VERCEL_BACKEND_URL
  ].filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      if (corsOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error(`Non autorisé par CORS`));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization','refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log(`CORS configurés:`, corsOrigins);

  await app.init();
  return app.getHttpAdapter().getInstance();

}

export default async (req: Request, res: Response) => {
  const server = await createNestServer();
  server(req, res);
};