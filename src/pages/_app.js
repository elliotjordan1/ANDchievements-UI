import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Header from '../components/Header/Header';
import AppWrapper from './styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </ AppWrapper>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape.isRequired
};

export default MyApp;
