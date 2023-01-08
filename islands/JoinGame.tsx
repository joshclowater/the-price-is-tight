import { useState } from "preact/hooks";
import { server } from "@/communication/server.ts";

export default function JoinGame() {
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      disabled={submitting}
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const playerId = await server.joinGame(gameName, playerName);
          location.pathname = "/player/" + playerId;
        } catch (error) {
          console.error('Error joining game', error);
          setSubmitting(false);
          // TODO handle/show error message in UI
        }
      }}
    >
      <label>
        <div class="mb-2.5">
          <p class="font-semibold">Game ID</p>
          <p class="font-medium text-xs text-gray-500">
            The name of the host game.
          </p>
        </div>
        <input
          class="w-full h-9 rounded-md border border-gray-300 pl-3.5 mb-4 disabled:(opacity-25 pointer-events-none)"
          type="text"
          name="gameName"
          id="gameName"
          value={gameName}
          onChange={(e) => setGameName(e.currentTarget.value)}
          disabled={submitting}
        />
      </label>
      <label>
        <div class="mb-2.5">
          <p class="font-semibold">Your Name</p>
          <p class="font-medium text-xs text-gray-500">
            The name you will use for display in the game.
          </p>
        </div>
        <input
          class="w-full h-9 rounded-md border border-gray-300 pl-3.5 mb-4 disabled:(opacity-25 pointer-events-none)"
          type="text"
          name="playerName"
          id="playerName"
          value={playerName}
          onChange={(e) => setPlayerName(e.currentTarget.value)}
          disabled={submitting}
        />
      </label>
      <button
        class="mt-7 flex flex items-center rounded-md h-8 py-2 px-4 bg-gray-800 font-medium text-sm text-white disabled:(opacity-25 pointer-events-none)"
        type="submit"
        disabled={submitting}
      >
        Join
      </button>
    </form>
  );
}