import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/theme.css";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );

}

export default MyApp;
