import { logger, TELEGRAM_BOT_TOKE } from '@app/common/constants';
import { CommandRegType, GlobalService } from '@app/common/globals';
import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import context from 'telegraf/typings/context';
import { TelegrafClient } from './telegrafClient';

@Injectable()
export class TelegramService {
  public client: TelegrafClient;
  constructor(
    @Inject('TELEGRAM_SERVICE') private microServiceClient: ClientProxy,
  ) {}
  async botBootstrap() {
    this.client = new TelegrafClient(TELEGRAM_BOT_TOKE);
    this.client.start((ctx) => ctx.reply('Hii This is sample Help - ping'));

    logger.log('Bot Online', 'Telegram');
    this.client.launch();
  }

  @OnEvent('command.inject', { async: true })
  registerCommandEvent(payload: CommandRegType) {
    if (payload.platforms.includes('telegram')) {
      this.client.command(payload.alias, async (ctx) => {
        ctx.reply(`Used Command ${payload.alias}`);
        //console.log(ctx);

        this.microServiceClient.emit(payload.callname, ctx);
      });
      logger.debug(`Injected ${payload.alias}`, 'Telegram');
    }
  }

  HandleReply(msg) {
    console.log(msg);
    //this.client.context.sendMessage('hoooooooooo', msg);
  }
}
