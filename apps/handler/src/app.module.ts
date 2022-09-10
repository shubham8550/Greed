import { NATS_SERVER_URL } from '@app/common/constants';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaclientModule } from './waclient/waclient.module';
import { TelegramModule } from './telegram/telegram.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ClientsModule.register([
      {
        name: 'HANDLER_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [NATS_SERVER_URL],
        },
      },
    ]),
    WaclientModule,
    TelegramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
