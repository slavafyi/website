export default function Home() {
  return (
    <>
      <section>
        <h1 class="text-32 font-bold">Slava Maksimov</h1>
        <div>
          <span class="font-semibold text-fg-muted">Software Developer</span>
          ・
          <a href="https://github.com/slavamak" class="font-semibold text-fg-accent">
            @slavamak
          </a>
        </div>
      </section>

      <section>
        <ul class="flex flex-col gap-y-5 text-xl font-medium">
          <li>
            <a href="/projects">Projects</a>
          </li>

          <li>
            <a href="/blog">Blog posts</a>
          </li>
        </ul>
      </section>

      <section>
        <ul class="flex flex-col gap-y-5 text-xl text-fg-muted">
          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="mailto:hello@slavamak.com">Email</a>
          </li>
        </ul>
      </section>
    </>
  );
}
