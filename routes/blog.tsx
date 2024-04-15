import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>Blog posts | Slava Maksimov</title>
      </Head>

      <section>
        <h1 class="text-32 font-bold">Blog posts</h1>
      </section>

      <section class="space-y-8">
        <p>Nothing posted yet</p>
      </section>
    </>
  );
}
