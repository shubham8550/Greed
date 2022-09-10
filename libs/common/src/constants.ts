import { Logger } from '@nestjs/common';
export const logger: Logger = new Logger();
//server stuff
export const NATS_SERVER_URL = 'nats://test.sbserver.ml:4222';
//EVENT names
export const COMMAND_REGISTRY_EVENT = 'COMMAND_REGISTRY_EVENT';
export const HANDLER_REGISTRY_EVENT = 'HANDLER_REGISTRY_EVENT';
