import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.form`
  margin: 16px 24px;
  height: 100%;
`;

const FormWrapper = ({
  children
}) => <Wrapper>{children}</Wrapper>

FormWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default FormWrapper;