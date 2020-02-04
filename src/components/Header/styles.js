import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.div`
  background-color: ${theme.colours.brand.red};
  width: 100%;
  height: 48px;
  display: flex;
  @media ${theme.media.tablet} {
    height: 64px;
  };
  @media ${theme.media.desktop} {
    height: 88px;
  };
`;

export const LogoWrapper = styled.a`
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
