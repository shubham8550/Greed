import { NestFactory } from '@nestjs/core';
import { PingModule } from './ping.module';

async function bootstrap() {
  const app = await NestFactory.create(PingModule);
  await app.listen(3000);
}
bootstrap();
