import { Handler, HandlerContext, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { databaseLoader } from "@/communication/database.ts";
import { Page } from "@/helpers/Page.tsx";
import Host from "@/islands/Host.tsx";
import { GameAndPlayers } from "../../communication/types.ts";

export const handler: Handler<GameAndPlayers> = async (
  _req: Request,
  ctx: HandlerContext<GameAndPlayers>,
): Promise<Response> => {
  const database = await databaseLoader.getInstance();
  const { game, players } = await database.getGame(ctx.params.game);
  return ctx.render({
    game,
    players
  });
};

export default function HostPage({ data }: PageProps<GameAndPlayers>) {
  return (
    <>
      <Head>
        <title>{data.game.name} | The Price is Tight</title>
      </Head>
      <Page>
        <div>
          <Host game={data.game} players={data.players} />
        </div>
      </Page>
    </>
  );
}
