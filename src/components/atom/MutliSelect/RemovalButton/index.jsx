import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

const Button = styled.button`
  font-style: normal;
  font-size: 18px;
  line-height: 140.62%;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  border: solid 0px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.colours.brand.red};
  font-size: 16px;
  @media ${theme.media.tablet} {
    font-size: 18px;
  };
  @media ${theme.media.desktop} {
    font-size: 22px;
  };
`;

const RemoveButton = ({
  labelText,
  buttonType,
  onClick
}) => <Button type={buttonType} onClick={onClick}>{labelText}</Button>

RemoveButton.propTypes = {
  labelText : PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

RemoveButton.defaultProps = {
  onClick: undefined
}

export default RemoveButton;