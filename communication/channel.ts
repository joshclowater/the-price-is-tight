import type { ChannelMessage } from "./types.ts";

export class GameChannel {
  #channel: BroadcastChannel;

  constructor(game: string) {
    this.#channel = new BroadcastChannel(game);
  }

  onMessage(handler: (message: ChannelMessage) => void) {
    const listener = (e: MessageEvent) => {
      handler(e.data);
    };
    this.#channel.addEventListener("message", listener);
    return {
      unsubscribe: () => {
        this.#channel.removeEventListener("message", listener);
      },
    };
  }

  close() {
    this.#channel.close();
  }

  sendMessage(message: ChannelMessage) {
    this.#channel.postMessage(message);
  }

}
