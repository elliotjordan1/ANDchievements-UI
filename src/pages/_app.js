import './styles.css';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppWrapper from './styles';
import 'babel-polyfill';
import ProjectForm from '../components/ProjectForm/ProjectForm';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
      < ProjectForm />
      <Footer />
    </ AppWrapper>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.shape).isRequired
};

export default MyApp;
