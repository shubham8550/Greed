import { Module } from '@nestjs/common';
import { WaclientService } from './waclient.service';
import { WaclientController } from './waclient.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVER_URL } from '@app/common/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WACLIENT_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [NATS_SERVER_URL],
        },
      },
    ]),
  ],
  controllers: [WaclientController],
  providers: [WaclientService],
})
export class WaclientModule {}
