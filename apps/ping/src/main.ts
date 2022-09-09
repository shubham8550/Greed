import { NATS_SERVER_URL } from '@app/common/constants';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PingModule } from './ping.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PingModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [NATS_SERVER_URL],
      },
    },
  );

  await app.listen();
}
bootstrap();
