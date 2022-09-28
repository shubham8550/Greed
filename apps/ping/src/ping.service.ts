import { COMMAND_REGISTRY_EVENT } from '@app/common/constants';
import { CommandRegType } from '@app/common/globals';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PingService {
  constructor(@Inject('PING_SERVICE') private client: ClientProxy) {}

  registerCommand() {
    const cmdinfo: CommandRegType = {
      alias: 'ping',
      callname: 'ping',
      platforms: ['whatsapp', 'telegram', 'discord'],
    };
    this.client.emit(COMMAND_REGISTRY_EVENT, cmdinfo);
  }
  //Todo
  commandHandler(msg: any) {
    console.log(msg);
  }

  getMockWhatsappClient() {} //monkeypack and stuff
}
