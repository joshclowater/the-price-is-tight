import type { ChannelMessage } from "./types.ts";

export class Server {
  subscribeMessages(
    game: string,
    onMessage: (message: ChannelMessage) => void,
  ) {
    const events = new EventSource(`/api/connect/${game}`);
    const listener = (e: MessageEvent) => {
      const msg = JSON.parse(e.data) as ChannelMessage;
      onMessage(msg);
    };
    events.addEventListener("message", listener);
    return {
      unsubscribe() {
        events.removeEventListener("message", listener);
      },
    };
  }

  async createGame() {
    const res = await fetch("/api/create_game", {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  }

  async joinGame(gameName: string, playerName: string) {
    const res = await fetch("/api/join_game", {
      method: "POST",
      body: JSON.stringify({ gameName, playerName }),
    });
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.text();
  }
}

export const server = new Server();
