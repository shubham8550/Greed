import { Controller, OnModuleInit } from '@nestjs/common';
import { WaclientService } from './waclient.service';

@Controller('waclient')
export class WaclientController implements OnModuleInit {
  constructor(private readonly waclientService: WaclientService) {}
  onModuleInit() {
    this.waclientService.botBootstrap();
  }
}
