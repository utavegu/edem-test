import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app/app.module';
import { clientPort, serverPort } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api').enableCors({
    origin: [`http://localhost:${clientPort}`],
    credentials: false,
    optionsSuccessStatus: 200,
  });

  await app.listen(serverPort);
}
bootstrap();
