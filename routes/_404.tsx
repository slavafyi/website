import { Head } from "$fresh/runtime.ts";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <section>
        <h1 class="text-32 font-bold">404 - Page not found</h1>

        <p class="my-4">
          The page you were looking for doesn't exist.
        </p>

        <a href="/" class="underline">Go back home</a>
      </section>
    </>
  );
}
