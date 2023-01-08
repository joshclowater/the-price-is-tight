import { Handlers } from "$fresh/server.ts";
import { databaseLoader } from "@/communication/database.ts";
import { GameChannel } from "@/communication/channel.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { gameName, playerName } = await req.json();
    const database = await databaseLoader.getInstance();
    let playerId;
    try {
      playerId = await database.addPlayer(gameName, playerName);
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
    const channel = new GameChannel(gameName);
    channel.sendMessage({
      type: 'playerAdded',
      player: { id: playerId, name: playerName },
    });
    channel.close();
    return new Response(playerId, {
      status: 201,
    });
  },
};
