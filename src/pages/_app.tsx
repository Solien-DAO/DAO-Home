import { Provider } from 'mobx-react';
import myStore from '../mvvm/store'; // Adjust the import path as needed
import '../Styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={myStore}>
       <Head>
        <title>Solien DAO</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link
  rel="icon"
  type="image/svg+xml"
  sizes="32x32"
  href="/icons/daologo.png"
/>
<link
  rel="icon"
  type="image/svg+xml"
  sizes="16x16"
  href="/icons/daologo.png"
/>
<link
  rel="shortcut icon"
  type="image/svg+xml"
  href="/icons/daologo.png"
/>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
