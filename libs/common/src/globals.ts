/* Alias : callname */
export class GlobalService {
  /**
   * In Memory Command list for Registerd commands
   * {
   *     alias: string;
   *    callname: string;
   * }
   *
   *
   * @type [CommandRegType]
   *
   */
  static commands: { [alias: string]: CommandRegType } = {};
}

export interface CommandRegType {
  alias: string;
  callname: string;
  platforms: (keyof typeof platforms)[];
}
export enum platforms {
  whatsapp,
  discord,
  telegram,
  all,
}
