import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../global/theme';

const Wrapper = styled.a`
  display: block;
  align-self: center;
  height: 24px;
  margin-left: 12px;
  cursor: pointer;
  & > svg{
    height: 24px;
    width: 143px;
  }
  @media ${theme.media.tablet} {
    height: 37px;
    & > svg{
      height: 37px;
      width: 216px;
      margin-left: 15px;
    }
  };
  @media ${theme.media.desktop} {
    height: 56px;
    & > svg{
      height: 56px;
      width: 326px;
      margin-left: 15px;
    }
  };
  };
`;

const LogoWrapper = ({
  children
}) => <Wrapper>{children}</Wrapper>

LogoWrapper.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
}

export default LogoWrapper;