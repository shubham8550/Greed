import { COMMAND_REGISTRY_EVENT } from '@app/common/constants';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [process.env.NATS_SERVER_URL],
        //queue: COMMAND_REGISTRY_EVENT,
      },
    },
  );
  await app.listen();
}
bootstrap();
