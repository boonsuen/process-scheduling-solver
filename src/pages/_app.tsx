import Head from 'next/head';
import Script from 'next/script';
import GlobalStyle, { fontFaceRules } from '../components/GlobalStyle.css';

import img_favicon from '../assets/img/favicon.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={img_favicon} />
        <style dangerouslySetInnerHTML={{ 
          __html: fontFaceRules 
        }}></style>
        <Script
          src="https://cdn.splitbee.io/sb.js"
          strategy="afterInteractive"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}