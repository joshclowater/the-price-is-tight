import { useState } from "preact/hooks";
import { server } from "@/communication/server.ts";

export default function AddRoom() {
  const [creatingGame, setCreatingGame] = useState(false);

  const createGame = async () => {
    setCreatingGame(true);
    try {
      const game = await server.createGame();
      location.pathname = "/host/" + game.name;
    } catch (error) {
      console.error('Error creating game', error);
    }
    setCreatingGame(false);
  };

  const joinGame = () => {
    location.pathname = "/player/join";
  }

  return (
    <>
      <button
        class="flex justify-center items-center bg-white rounded-full h-18 w-full mb-4 border-2 border-gray-300 transition-colors hover:(bg-green-100 border-green-400) group disabled:(opacity-25 pointer-events-none)"
        onClick={createGame}
        disabled={creatingGame}
      >
        <div class="w-8 h-8 flex justify-center items-center mr-2.5">
          {creatingGame
            ? <img src="/loading.svg" alt="Loading" />
            : <img src="/plus.svg" alt="Plus" />}
        </div>
        <span class="text-xl font-bold text-gray-900 group-hover:underline group-focus:underline">
          Create Game
        </span>
      </button>
      <button
        // href="/join"
        class="flex justify-center items-center bg-white rounded-full h-18 w-full mb-4 border-2 border-gray-300 transition-colors hover:(bg-green-100 border-green-400) group disabled:(opacity-25 pointer-events-none)"
        onClick={joinGame}
        disabled={creatingGame}
      >
        <div class="w-8 h-8 flex justify-center items-center mr-4">
          <img src="/join.svg" alt="Join" />
        </div>
        <span class="text-xl font-bold text-gray-900 group-hover:underline group-focus:underline">
          Join Game
        </span>
      </button>
    </>
  );
}