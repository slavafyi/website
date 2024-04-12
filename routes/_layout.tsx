import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="flex flex-col gap-y-8 w-full max-w-xl mx-auto px-8 py-24">
      <header>
        <img
          class="rounded-xl"
          src="/photo.jpg"
          width="80"
          height="80"
          alt="It's me"
        />
      </header>

      <main class="flex flex-col gap-y-12">
        <Component />
      </main>
    </div>
  );
}

