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
/* import helmet from 'helmet'; */
import { Request, Response } from 'express';

let app: any;

async function bootstrap() {
  console.log('Application NestJS en cours de démarrage...');

  app = await NestFactory.create(AppModule);
  console.log('Application NestJS créée.');

  /* app.use(helmet());
  console.log('Helmet configuré.'); */

/*  const localhostUrl = process.env.LOCALHOST_URL;
  const ipv4Url = process.env.IPV4_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const vercelBackendUrl = process.env.VERCEL_URL; */

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization','refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log(`CORS configurés`);

  const expressApp = app.getHttpAdapter().getInstance();

  // Add OPTIONS handling for preflight requests
  expressApp.options('*', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept, Authorization, refresh_token');
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(HttpStatus.NO_CONTENT);
  });

  app.useGlobalPipes(new ValidationPipe());
  console.log(`Global validation pipe configuré.`);

  app.useGlobalInterceptors(new LoggingInterceptor(), new TransformInterceptor(), new SetHeadersInterceptor());
  console.log(`Interceptors configurés.`);

  app.useGlobalFilters(new HttpExceptionFilter(), new CustomHttpExceptionFilter());
  console.log(`Global exception filters configurés.`);

  app.use(compression());
  console.log(`Compression configurée.`);

  if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
      } else {
        next();
      }
    });

    console.log(`Redirection HTTP vers HTTPS activée.`);
  }

  const config = new DocumentBuilder()
  .setTitle('alt-bootcamp')
  .setDescription('The alt-bootcamp API description')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(`Documentation Swagger documentation configurée.`);

  const port = process.env.PORT || 3000;

  try {
    await app.listen(port);
    console.log(`NestJS application is listening on port ${port}.`);
  } catch (error) {
    console.error(`Error starting application:`, error);
  }
}

export default async function handler(req: Request, res: Response) {
  if (!app) {
    await bootstrap(); // Initialize the application only once
  }

  // Handle incoming requests
  try {
    // You can add logic here to quickly respond to requests
    if (req.method === 'GET') {
      res.status(200).send('Request is being processed...');
      
      // Process the request asynchronously if needed
      setTimeout(async () => {
        console.log('Processing data...');

        // Replace with your actual function or logic
        await processData(); // Simulated async processing function

        console.log('Data processed successfully!');
      }, 100); // Use a small timeout for demo purposes
    } else {
      res.status(405).send('Method Not Allowed');
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function processData() {
  // Simulate a long-running task
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating a delay of 3 seconds
}