import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../global/theme';

const Input = styled.input`
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    border:  ${({hiddenBorder}) => hiddenBorder ? '0px solid black' : '1px solid black'};
    margin: 8px 0;
    font: 300 12px ${theme.fontFamily.primary};
    height: 40px;
    @media ${theme.media.tablet} {
        font-size: 14px;
        margin: 8px 0 16px 0;
        height: 40px;
        padding-left: 16px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
        height: 50px;
        margin: 8px 0 24px 0;
    };
`;

const FormInput = ({
  maxLength,
  type,
  name,
  onBlur,
  hiddenBorder,
  placeholder,
  value,
  onChange
}) => <Input 
          type = {type}
          name = {name}
          onBlur = {onBlur}
          hiddenBorder={hiddenBorder} 
          maxLength = {maxLength} 
          placeholder = {placeholder} 
          value = {value} 
          onChange={onChange} 
      />

FormInput.propTypes = {
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  hiddenBorder: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func
};

FormInput.defaultProps = {
  value: '',
  onChange: undefined,
  hiddenBorder: false,
  type: '',
  name: '',
  onBlur: undefined
}

export default FormInput;