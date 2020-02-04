import './styles.css';
import PropTypes from 'prop-types';
import React from 'react';
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
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape.isRequired
};

export default MyApp;