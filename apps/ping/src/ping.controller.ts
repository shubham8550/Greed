import {
  COMMAND_REGISTRY_EVENT,
  HANDLER_REGISTRY_EVENT,
} from '@app/common/constants';
import { CommandRegType } from '@app/common/globals';
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

import { PingService } from './ping.service';

@Controller()
export class PingController implements OnModuleInit {
  constructor(private readonly pingService: PingService) {}
  onModuleInit() {
    /* register command on startup */
    this.pingService.registerCommand();
  }

  /* When new handler connects it re-register command */
  @MessagePattern(HANDLER_REGISTRY_EVENT)
  registerHandler(@Payload() data: CommandRegType) {
    this.pingService.registerCommand();
  }

  //todo make it queue thingy
  @MessagePattern('ping')
  commandHandler(@Payload() msg: any) {
    console.log('hiiii');

    this.pingService.commandHandler(msg);
  }
}
