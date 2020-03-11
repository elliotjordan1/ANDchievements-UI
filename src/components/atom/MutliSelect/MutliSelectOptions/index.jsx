import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

const Options = styled.div`
    font-family: ${theme.fontFamily.primary};
    border: solid 1px grey;
    padding: 10px 12px;
    color: ${theme.colours.brand.red};
    background: white;
`;

const MultiSelectOptions = ({
  value,
  onClick
}) => <Options onClick={onClick}>{value}</Options>

MultiSelectOptions.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

MultiSelectOptions.defaultProps = {
  onClick: undefined
}

export default MultiSelectOptions;