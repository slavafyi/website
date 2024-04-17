import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import site from "../data/site.json" with { type: "json" };

const cssString = `
  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${asset('/fonts/open-sans-v40-latin-regular.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: url(${asset('/fonts/open-sans-v40-latin-italic.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    src: url(${asset('/fonts/open-sans-v40-latin-500.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 500;
    src: url(${asset('/fonts/open-sans-v40-latin-500italic.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url(${asset('/fonts/open-sans-v40-latin-600.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    src: url(${asset('/fonts/open-sans-v40-latin-600italic.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${asset('/fonts/open-sans-v40-latin-700.woff2')}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    src: url(${asset('/fonts/open-sans-v40-latin-700italic.woff2')}) format('woff2');
  }
`

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{site.title}</title>
        <link rel="stylesheet" href={asset("/styles.css")} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style dangerouslySetInnerHTML={{__html: cssString}} />
      </head>

      <body>
        <Component />
      </body>
    </html>
  );
}
