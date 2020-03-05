import './styles.css';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import React from 'react';
import { Footer, Header } from '../components/molecule';
import AppWrapper from './styles';
import 'babel-polyfill';

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
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default MyApp;
