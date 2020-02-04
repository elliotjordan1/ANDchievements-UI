import "./styles.css";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/Header/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape.isRequired
};

export default MyApp;
