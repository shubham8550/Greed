import { logger } from '@app/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class WaclientService {
  constructor(@Inject('WACLIENT_SERVICE') private client: ClientProxy) {}
  /* This botBootstrap executed first | bot init */
  async botBootstrap() {
    logger.log('Bot Online', 'Whatsapp');
  }
}
