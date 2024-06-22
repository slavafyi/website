import { Head } from "$fresh/runtime.ts";
import menus from "../data/menus.json" with { type: "json" };
import site from "../data/site.json" with { type: "json" };

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={site.description} />
      </Head>

      <section>
        <h1 class="text-32 font-bold">Slava Maksimov</h1>
        <div>
          <span class="font-semibold text-fg-muted">Software Developer</span>
          ・
          <a
            href="https://github.com/slavamak"
            class="font-semibold text-fg-accent"
          >
            @slavamak
          </a>
        </div>
      </section>

      {menus.primary?.length > 0 && (
        <section>
          <ul class="flex flex-col gap-y-5 text-xl font-medium">
            {menus.primary.map((item) => (
              <li>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {menus.secondary?.length > 0 && (
        <section>
          <ul class="flex flex-col gap-y-5 text-xl text-fg-muted">
            {menus.secondary.map((item) => (
              <li>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
