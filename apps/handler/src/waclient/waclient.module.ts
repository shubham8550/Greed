import { Module } from '@nestjs/common';
import { WaclientService } from './waclient.service';
import { WaclientController } from './waclient.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WACLIENT_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER_URL],
        },
      },
    ]),
  ],
  controllers: [WaclientController],
  providers: [WaclientService],
})
export class WaclientModule {}
