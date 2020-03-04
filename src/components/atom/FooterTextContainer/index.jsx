import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const TextContainer = ({
  children
}) => <Container>{children}</Container>

TextContainer.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
}

export default TextContainer;