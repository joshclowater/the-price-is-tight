import { useEffect, useReducer, useState } from "preact/hooks";
import { server } from "@/communication/server.ts";
import { GameAndPlayers } from "@/communication/types.ts";

export default function Host(
  { game: initialGame, players: initialPlayers }: GameAndPlayers,
) {
  const [game, setGame] = useState(initialGame);
  const [players, setPlayers] = useState(initialPlayers);
  useEffect(() => {
    const subscription = server.subscribeMessages(game.name, (message) => {
      console.log('host subscription message', message);
      switch (message.type) {
        case "playerAdded": {
          setPlayers(prevPlayers => [...prevPlayers, message.player]);
          break;
        }
        default: {
          console.warn('unhandled subscription message');
        }
      }
    });

    return () => {
      console.warn('unsubscribing from', game.name);
      subscription.unsubscribe();
    };
  }, [game]);

  return (
    <>
      <div class="text-4xl pb-8">
        {game.name}
      </div>
      <div>
        {players.map(player =>
          <div key={player.name}>{player.name}</div>
        )}
      </div>
    </>
  )
}
