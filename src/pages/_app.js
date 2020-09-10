import React from 'react';
import Head from 'next/head';
import { Container, CssBaseline } from '@material-ui/core';

import Nav from '../components/Nav';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CodeBuddies</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Container>
        <Nav />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
