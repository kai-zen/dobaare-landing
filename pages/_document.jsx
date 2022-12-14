import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{ scrollBehavior: 'smooth', width: '100%', overflowX: 'hidden' }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
