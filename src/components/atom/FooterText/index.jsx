import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../global/theme';

const Text = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  width: 100%;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  height: 20px;
  margin-left: 12px;
  cursor: pointer;
  font-size: 10px;
  @media ${theme.media.tablet} {
    height: 30px;
    font-size: 14px;
  };
  @media ${theme.media.desktop} {
    height: 40px;
    font-size: 18px;
  };
`;


const FooterText = ({
  text,
  href
}) => <Text href={href}>{text}</Text>

FooterText.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string
}

FooterText.defaultProps = {
  href: ''
}

export default FooterText;