import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle.css';
import { Inter } from 'next/font/google';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PR31CLCPW1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PR31CLCPW1');`,
          }}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
