import './styles.css';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppWrapper from './styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ AppWrapper>
  );
};

MyApp.propTypes = {
  Component: PropTypes.shape.isRequired,
  pageProps: PropTypes.shape.isRequired
};

export default MyApp;
