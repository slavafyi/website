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
          I'm a seasoned remote contractor who's been helping small and
          mid-sized companies thrive in the Shopify ecosystem for over 5 years.
          Before going freelance, I spent nearly 6 years as a system
          administrator for a state organization.
        </p>
        <p>
          These days, you can find me working on building custom Shopify stores
          using modern web technologies. I'm also interested in learning Node.js
          and using Medusa for headless commerce projects.
        </p>
        <p>Outside of my work, I'm an avid motorcyclist.</p>
      </section>

      <section class="prose space-y-8">
        <h2 class="text-2xl font-bold">Interests</h2>

        <ul class="text-lg space-y-3 list-disc list-inside">
          <li>
            Tinkering with Neovim and the terminal.
          </li>
          <li>
            Constantly expanding my skills in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Computer_science"
              title="Computer science"
              target="_blank"
            >
              Computer science
            </a>.
          </li>
          <li>
            Open-source and self-hosted solutions.
          </li>
          <li>
            Securing my{"  "}
            <a
              href="https://digital-defense.io"
              title="Digital Defense"
              target="_blank"
            >
              digital
            </a>{" "}
            life and protecting my privacy.
          </li>
        </ul>
      </section>

      {menus.contact?.length > 0 && (
        <section class="space-y-8">
          <h2 class="text-2xl font-bold">You can find me here</h2>

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
