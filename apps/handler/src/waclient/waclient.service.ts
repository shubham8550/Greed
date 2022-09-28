import { logger } from '@app/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import BaileysBottle from 'baileys-bottle';
import { Boom } from '@hapi/boom';
import makeWASocket, {
  fetchLatestBaileysVersion,
  DisconnectReason,
  AuthenticationState,
} from '@adiwajshing/baileys';
import AuthHandle from 'baileys-bottle/lib/bottle/AuthHandle';
import StoreHandle from 'baileys-bottle/lib/bottle/StoreHandle';

@Injectable()
export class WaclientService {
  constructor(
    @Inject('WACLIENT_SERVICE') private microServiceclient: ClientProxy,
  ) {}
  client: ReturnType<typeof makeWASocket>;
  bottle: { auth: AuthHandle; store: StoreHandle };
  stateManager: { state: AuthenticationState; saveState: () => void };

  /* This botBootstrap executed first | bot init */
  async botBootstrap() {
    logger.log('Bot Online', 'Whatsapp');
    this.bottle = await BaileysBottle({
      type: 'sqlite',
      database: 'db.sqlite',
    });
    const { auth, store } = this.bottle;
    this.stateManager = await auth.useAuthHandle();
    const { state, saveState } = this.stateManager;

    const startSocket = async () => {
      const { version, isLatest } = await fetchLatestBaileysVersion();
      console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`);

      this.client = makeWASocket({
        version,
        printQRInTerminal: true,
        auth: state,
      });

      store.bind(this.client.ev);

      this.client.ev.process(async (events) => {
        //
        // Start your bot code here...
        //
        if (events['messages.upsert']) {
          const upsert = events['messages.upsert'];
          console.log('recv messages ', JSON.stringify(upsert, undefined, 2));
          if (upsert.type === 'notify') {
            for (const msg of upsert.messages) {
              if (!msg.key.fromMe) {
                // mark message as read
                await this.client!.readMessages([msg.key]);
                //new Message(msg,this.client).reply("HIii")
              }
            }
          }
        }
        //
        // End your bot code here...
        //

        // credentials updated -- save them
        if (events['creds.update']) saveState();

        if (events['connection.update']) {
          const update = events['connection.update'];
          const { connection, lastDisconnect } = update;
          connection === 'open'
            ? console.log('Connected')
            : connection === 'close'
            ? (lastDisconnect?.error as Boom)?.output?.statusCode !==
              DisconnectReason.loggedOut
              ? startSocket()
              : console.log('Connection closed. You are logged out.')
            : null;
        }
      });
    };

    startSocket();
  }
}
