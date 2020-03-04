import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../global/theme';

const Wrapper = styled.div`
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: ${theme.colours.brand.red};
  position: relative;
  bottom: 0;
  width: 100%;
  height: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${theme.media.tablet} {
    height: 50px;
  };
  @media ${theme.media.desktop} {
    height: 65px;
  };
`;

const FooterWrapper = ({
  children
}) => <Wrapper>{children}</Wrapper>

FooterWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default FooterWrapper;