import { Handlers } from "$fresh/server.ts";
import { databaseLoader } from "@/communication/database.ts";

export const handler: Handlers = {
  async POST(_req, _ctx) {
    const database = await databaseLoader.getInstance();
    const game = await database.createGame();

    return new Response(JSON.stringify(game), {
      status: 201,
    });
  },
};
