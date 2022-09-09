import { COMMAND_REGISTRY_EVENT } from '@app/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PingService {
  constructor(@Inject('PING_SERVICE') private client: ClientProxy) {}

  registerCommand() {
    this.client.emit(COMMAND_REGISTRY_EVENT, {
      alias: 'ping',
      callname: 'ping',
    });
  }
  //Todo
  // commandHandler(msg: any) {
  //    { text: 'pong' };
  // }
}
