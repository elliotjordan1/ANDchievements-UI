import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../global/theme';

const FormInput = styled.input`
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  border:  1px solid black;
  margin: 4px 0 8px 0;
  font: 300 12px ${theme.fontFamily.primary};
  height: 40px;
  @media ${theme.media.tablet} {
      font-size: 14px;
      margin: 4px 0 16px 0;
      height: 40px;
      padding-left: 16px;
  };
  @media ${theme.media.desktop} {
      font-size: 16px;
      height: 50px;
  };
`;

const CustomFormInput = ({
  maxLength,
  placeholder
}) => <FormInput maxLength={maxLength} placeholder={placeholder} />

CustomFormInput.propTypes = {
  maxLength: PropTypes.number,
  placeholder: PropTypes.string
};

CustomFormInput.defaultProps = {
  maxLength: 40,
  placeholder: ''
};

export default CustomFormInput;