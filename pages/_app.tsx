import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import 'antd-css-utilities/utility.min.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
