import styled from 'styled-components';
import theme from '../../global/theme';

export const FooterWrapper = styled.div`
  background-color: ${theme.colours.brand.red};
  position: relative;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 30px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${theme.media.tablet} {
    height: 50px;
  };
  @media ${theme.media.desktop} {
    height: 65px;
  };
`;

export const FooterText = styled.a`
  display: flex;
      width: 100%;
  color: white;
  font-family: "Arial";
  align-self: center;
  height: 20px;
  margin-left: 12px;
  cursor: pointer;
  font-size: 15px;
  vertical-align: middle;
  @media ${theme.media.tablet} {
    height: 30px;
    font-size: 20px;
  };
  @media ${theme.media.desktop} {
    height: 40px;
    font-size: 25px;
  };
  };
`;

export const JaiBox = styled.div`
  display: flex;
  margin: 1% auto 0;
`;