import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';

describe('PingController', () => {
  let pingController: PingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();

    pingController = app.get<PingController>(PingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pingController.getHello()).toBe('Hello World!');
    });
  });
});
