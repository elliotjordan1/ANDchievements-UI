import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    min-height: 55px;
`;

const InputWrapper = ({
  children
}) => <Wrapper>{children}</Wrapper>

InputWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default InputWrapper;