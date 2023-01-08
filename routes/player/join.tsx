import { Head } from "$fresh/runtime.ts";
import { Page } from "@/helpers/Page.tsx";
import JoinGame from "@/islands/JoinGame.tsx";

export default function NewRoom() {
  return (
    <>
      <Head>
        <title>Join Game | The Price is Tight</title>
      </Head>
      <Page>
        <div class="rounded-2xl w-5/6 md:w-5/12 max-w-xl pt-4 pb-8 px-7 bg-[#F9F9F9] border-1 border-gray-300">
          <div class="h-8 flex-none flex justify-between items-center mb-9">
            <a
              href="/"
              class="h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-200 rounded-2xl"
            >
              <img src="/arrow.svg" alt="Back" />
            </a>
            <div class="font-medium text-lg flex items-center text-black -ml-8">
              <div class="w-6 h-6 flex justify-center items-center mr-1.5">
                <img src="/join.svg" alt="Join" />
              </div>
              Join Game
            </div>
            <div />
          </div>
          <JoinGame />
        </div>
      </Page>
    </>
  );
}