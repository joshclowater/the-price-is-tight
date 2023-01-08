import { Handler, HandlerContext, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { databaseLoader } from "@/communication/database.ts";
import { Page } from "@/helpers/Page.tsx";
import { GameAndPlayer } from "@/communication/types.ts";

export const handler: Handler<GameAndPlayer> = async (
  _req: Request,
  ctx: HandlerContext<GameAndPlayer>,
): Promise<Response> => {
  const database = await databaseLoader.getInstance();
  const { game, player } = await database.getGameByPlayerId(ctx.params.id);
  return ctx.render({
    game,
    player
  });
};

export default function PlayerPage({ data }: PageProps<GameAndPlayer>) {
  return (
    <>
      <Head>
        <title>Player {data.player.name} | {data.game.name} | The Price is Tight</title>
      </Head>
      <Page>
        <div>
          Waiting for game to start
        </div>
      </Page>
    </>
  );
}