import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api').enableCors({
    origin: ['http://localhost:3000'],
    credentials: false,
    optionsSuccessStatus: 200,
  });

  await app.listen(4000);
}
bootstrap();
