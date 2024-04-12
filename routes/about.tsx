import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Slava Maksimov</title>
      </Head>

      <section>
        <h1 class="text-32 font-bold">About</h1>
      </section>

      <ul class="flex flex-col gap-y-5 text-xl font-medium">
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </>
  );
}
