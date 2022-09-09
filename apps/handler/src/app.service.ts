import { HANDLER_REGISTRY_EVENT } from '@app/common/constants';
import { CommandRegType, GlobalService } from '@app/common/globals';
import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('HANDLER_SERVICE') private client: ClientProxy) {}

  // getHello(): string {
  //   return 'Hello World!';
  // }
  injectCommand(command: CommandRegType) {
    GlobalService.commands[command.alias] = command;
    Logger.log(`Command Injected ${command.alias} : ${command.callname}`);
  }

  registerHandler() {
    this.client.emit(HANDLER_REGISTRY_EVENT, {
      handlerName: 'Aqua',
    });
  }
}
