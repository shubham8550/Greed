import { Controller, OnModuleInit } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController implements OnModuleInit {
  public static uuid = randomUUID();

  constructor(private readonly telegramService: TelegramService) {}
  async onModuleInit() {
    await this.telegramService.botBootstrap();

    //throw new Error('Method not implemented.');
  }

  @MessagePattern('telegram:reply:' + TelegramController.uuid)
  HandleReply(@Payload() data, @Ctx() context: NatsContext) {
    this.telegramService.HandleReply(data);
  }
}
