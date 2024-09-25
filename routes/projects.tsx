import { Head } from "$fresh/runtime.ts";
import projects from "../data/projects.json" with { type: "json" };

export default function About() {
  return (
    <>
      <Head>
        <title>Projects | Slava Maksimov</title>
      </Head>

      <section>
        <h1 class="text-32 font-bold">Projects</h1>
        <div class="font-bold text-fg-muted">
          Open-source, personal and commissioned projects
        </div>
      </section>

      {projects?.selected?.length > 0 && (
        <section class="space-y-8">
          <h2 class="text-2xl font-bold">Selected work</h2>

          <ul class="flex flex-col gap-y-5">
            {Array.from(projects.selected).reverse().map((item) => (
              <li class="space-y-1">
                <div class="text-fg-muted">{item.release_date}</div>
                <a
                  href={item.href}
                  target="_blank"
                  class="text-xl"
                  title={item.subtitle}
                >
                  {item.title}
                </a>
                <div class="text-fg-muted">{item.description}</div>
                <div class="text-sm text-fg-muted">{item.stack}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {projects?.open_source?.length > 0 && (
        <section class="space-y-8">
          <h2 class="text-2xl font-bold">Open-source</h2>

          <ul class="flex flex-col gap-y-5">
            {Array.from(projects.open_source).reverse().map((item) => (
              <li class="space-y-1">
                <a href={item.href} target="_blank" class="text-xl">
                  {item.title}
                </a>
                <div class="text-fg-muted">{item.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
