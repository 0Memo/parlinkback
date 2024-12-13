import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(AppController).getHello = () => '¡Hola mundo!';

  await app.listen(process.env.PORT || 3000);
}

bootstrap();