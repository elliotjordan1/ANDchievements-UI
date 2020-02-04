import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Header from '../components/Header/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Header />
    <Component {...pageProps} />
  </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape.isRequired
};

export default MyApp;
