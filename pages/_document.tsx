import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document to inject the AdSense script globally. This file runs
 * on the server and wraps the HTML document structure.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* AdSense loader. Replace the client ID once you have your AdSense account. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
