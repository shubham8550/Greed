import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { NATS_SERVER_URL } from '@app/common/constants';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TELEGRAM_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [NATS_SERVER_URL],
        },
      },
    ]),
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}
