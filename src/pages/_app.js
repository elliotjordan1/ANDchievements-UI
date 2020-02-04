import './styles.css'
import React from 'react';
import Header from '../components/Header/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Header />
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;