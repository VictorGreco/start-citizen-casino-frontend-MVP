
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function MyDocument(props) {

  return (
    <Html>
      <Head />
      <body className=''>
        <Main />
        <NextScript />

        <Script > 
            console.log("I am a not suspicious script :smile:")
        </Script>
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  let url = '';

  if (typeof ctx.req !== 'undefined') {
    const regex = /^[^?#]+/g;
    const requestUrl = ctx.req.url ?? '';
    const urlSplit = regex.exec(requestUrl);
    url = urlSplit ? urlSplit[0] : '';
  }

  return { ...initialProps, url };
}