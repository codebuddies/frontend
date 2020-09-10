import React from 'react';
import Container from '@material-ui/core/Container';

import Nav from '../components/Nav';

import '../App.css';

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Nav />
      <Component {...pageProps} />
    </Container>
  );
}
