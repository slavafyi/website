import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import site from "../data/site.json" with { type: "json" };

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{site.title}</title>
        <link rel="stylesheet" href={asset("/styles.css")} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://mastodon.social/@slavamak" />
        <link
          rel="preload"
          href={asset("/fonts/open-sans-v40-latin-regular.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href={asset("/fonts/open-sans-v40-latin-500.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href={asset("/fonts/open-sans-v40-latin-600.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href={asset("/fonts/open-sans-v40-latin-700.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </head>

      <body>
        <Component />
      </body>
    </html>
  );
}
