import { Head } from "$fresh/runtime.ts";
import { Footer } from "@/helpers/Footer.tsx";
import CreateOrJoinGameButtons from "@/islands/CreateOrJoinGameButtons.tsx";

export default function Main() {
  return (
    <>
      <Head>
        <title>The Price is Tight</title>
      </Head>
      <div class="flex justify-center items-center h-screen text-gray-600 bg-red-100">
        <div>
          <div class="mb-16 mx-8 text-center">
            <img
              class="h-48 mx-auto mb-6"
              src="/logo.svg"
              alt="The Price is Tight logo"
            />
          </div>
          <div>
            <CreateOrJoinGameButtons />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
