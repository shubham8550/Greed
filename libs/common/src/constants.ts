import { Logger } from '@nestjs/common';
export const logger: Logger = new Logger();
//ENVs Yep Not doing process.env yet
export const TELEGRAM_BOT_TOKE =
  '5672645683:AAFx4STY4JWQnI2GtfCPmg9KwzsXcFEwTm4';
//http://t.me/Magicianx69_bot

//server stuff
export const NATS_SERVER_URL = 'nats://test.sbserver.ml:4222';
//EVENT names
export const COMMAND_REGISTRY_EVENT = 'COMMAND_REGISTRY_EVENT';
export const HANDLER_REGISTRY_EVENT = 'HANDLER_REGISTRY_EVENT';
