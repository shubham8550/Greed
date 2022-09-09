import { NATS_SERVER_URL } from '@app/common/constants';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PING_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [NATS_SERVER_URL],
        },
      },
    ]),
  ],
  controllers: [PingController],
  providers: [PingService],
})
export class PingModule {}
