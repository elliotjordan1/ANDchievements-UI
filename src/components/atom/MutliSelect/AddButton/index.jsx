import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

const Button = styled.button`
    margin: 10px auto 10px auto;
    display: block;
    color: #FFFFFF;;
    background-color: ${theme.colours.brand.red};
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    @media ${theme.media.tablet} {
      font-size: 18px;
    };
    @media ${theme.media.desktop} {
    font-size: 22px;
    };
`;

const AddButton = ({
  labelText,
  buttonType,
  onClick
}) => <Button type={buttonType} onClick={onClick}>{labelText}</Button>

AddButton.propTypes = {
  labelText : PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

AddButton.defaultProps = {
  onClick: undefined
}

export default AddButton;