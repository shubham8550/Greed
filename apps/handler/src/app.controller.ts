import { COMMAND_REGISTRY_EVENT } from '@app/common/constants';
import { CommandRegType } from '@app/common/globals';
import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}
  onModuleInit() {
    this.appService.registerHandler();
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @MessagePattern(COMMAND_REGISTRY_EVENT)
  injectCommand(@Payload() data: CommandRegType) {
    this.appService.injectCommand(data);
  }
}
