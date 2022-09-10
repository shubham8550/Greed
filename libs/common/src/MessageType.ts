import { platforms } from './globals';

/**
 * extend ur msg with this type
 */
export class MessageType {
  platform: keyof typeof platforms;
}
