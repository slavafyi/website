import { Head } from "$fresh/runtime.ts";
import { type RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <Head>
        <title>{props.serverCode}</title>
      </Head>

      <main class="w-full h-screen flex items-center justify-center text-center">
        <section class="flex flex-col">
          <h1 class="text-[8rem] leading-none font-bold">
            {props.serverCode}
          </h1>

          <p class="text-xl mt-2 mb-8">
            {props.codeDescription}
          </p>

          <a href="/" class="text-xl font-bold">Back to the Homepage</a>
        </section>
      </main>
    </>
  );
}

export default function PageNotFound() {
  return ServerCodePage({
    serverCode: 404,
    codeDescription: "Couldn’t find what you’re looking for.",
  });
}
