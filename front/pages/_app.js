import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// global.css
import './global.css';

const Westagram = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Westargram</title>
    </Head>
    <Component {...pageProps} />
  </>
);

Westagram.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default Westagram;
