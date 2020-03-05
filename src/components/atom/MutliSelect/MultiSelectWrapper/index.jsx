import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

const Wrapper = styled.div`
    font-family: ${theme.fontFamily.primary};
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    min-height: 55px;
`;

const MultiSelectWrapper =({
  children
}) => <Wrapper>{children}</Wrapper>

MultiSelectWrapper.propTypes ={
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default MultiSelectWrapper;