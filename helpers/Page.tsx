import { ComponentChildren } from "preact";
// import { Footer } from "./Footer.tsx";

export function Page({ children }: { children: ComponentChildren }) {
  return (
    <div class="flex justify-center items-center h-screen text-gray-600 bg-red-100">
    {/* <div class="flex flex-col justify-center items-center w-full h-screen children:(bg-[#F9F9F9] border-1 border-gray-300)"> */}
      {children}
    </div>
  );
}
