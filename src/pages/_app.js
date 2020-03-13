import './styles.css';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Footer, Header } from '../components/molecule';
import AppWrapper from './styles';
import 'babel-polyfill';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ToastProvider>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ AppWrapper>
    </ToastProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default MyApp;
