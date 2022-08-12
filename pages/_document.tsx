import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Crypto To Cash Now" />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
