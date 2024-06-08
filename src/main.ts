/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filters';
import { CustomHttpExceptionFilter } from './filters/custom-exception.filters';

async function bootstrap() {
  console.log('Application NestJS en cours de démarrage...');

  const app = await NestFactory.create(AppModule);
  console.log('Application NestJS créée.');

  app.useGlobalPipes(new ValidationPipe());
  console.log('Global validation pipe configuré.');

  app.useGlobalFilters(new HttpExceptionFilter(), new CustomHttpExceptionFilter());
  console.log('Global exception filters configurés.');

  const config = new DocumentBuilder()
  .setTitle('alt-bootcamp')
  .setDescription('The alt-bootcamp API description')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log('Documentation Swagger documentation configurée.');
  await app.listen(3000);
  console.log('L\'application NestJS écoute sur le port 3000.');
}
bootstrap();