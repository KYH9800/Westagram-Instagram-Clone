import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// global.css
import './global.css';
// react-slick CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
