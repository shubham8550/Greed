import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  getHello(): string {
    return 'Hello World!';
  }
}
