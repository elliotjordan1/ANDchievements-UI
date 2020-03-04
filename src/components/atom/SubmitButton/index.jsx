import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../global/theme';

const Button = styled.button`
  background-color: ${theme.colours.brand.red};
  width: 120px;
  height: 40px;
  cursor: pointer;
  display: block;
  margin: 8px auto;
  border: none;
  color: white;
  font: 500 14px ${theme.fontFamily.primary};
  letter-spacing: 2px;
  margin-top: 8px;
  :hover{
      opacity: 90%;
  }
  :active{
      background-color: ${theme.colours.brand.red2};
  }
  @media ${theme.media.tablet} {
      width: 160px;
      height: 50px;
      font-size: 16px;
      letter-spacing: 2px;
      margin-top: 16px;
  };
  @media ${theme.media.desktop} {
      width: 200px;
      height: 60px;
      font-size: 18px;
      letter-spacing: 3px;
      margin-top: 24px;
  };
`;

const SubmitButton = ({
  onClick,
  text
}) => <Button onClick={onClick}>{text}</Button>

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

SubmitButton.defaultProps = {
  onClick: () => {}
};

export default SubmitButton;