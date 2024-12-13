/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://parlink.vercel.app'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization', 'refresh_token'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  console.log('CORS configured.');

  app.useGlobalPipes(new ValidationPipe());
  console.log('Global validation pipe configured.');

  if (process.env.NODE_ENV === 'production') {
    console.log('Production mode detected.');
    app.use((req, res, next) => {
      if (!req.secure) {
        return res.redirect(`https://${req.headers.host}${req.url}`);
      }
      next();
    });
  }

  await app.listen(process.env.PORT || 3000);
  console.log(`L'application écoute sur le port: ${await app.getUrl()}`);
}

export default bootstrap();