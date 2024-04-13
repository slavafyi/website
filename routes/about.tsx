import { Head } from "$fresh/runtime.ts";
import menus from "../data/menus.json" with { type: "json" };

export default function About() {
  return (
    <>
      <Head>
        <title>About | Slava Maksimov</title>
      </Head>

      <section>
        <h1 class="text-32 font-bold">About</h1>
      </section>

      <section class="text-lg space-y-5">
        <p>
          I work remotely as a solo contractor for Shopify ecosystem and
          e-commerce for 4 years. Before that I spent nearly 6 years at state
          organization as a system administrator.
        </p>
        <p>I typically work with small companies but I'm looking forward to join something big.</p>
        <p>Outside of work, I'm an motorcyclist and programmer nerd.</p>
      </section>

      {menus.contact?.length > 0 && (
        <section>
          <ul class="flex flex-col gap-y-5 text-xl text-fg-muted">
            {menus.contact.map((item) => (
              <li>
                <a href={item.href} target="_blank">
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
