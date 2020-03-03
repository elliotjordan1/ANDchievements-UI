import styled from 'styled-components';
import theme from '../../global/theme';

export const FooterWrapper = styled.div`
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

export const FooterText = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  width: 100%;
  font-family: ${theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  height: 20px;
  margin-left: 12px;
  cursor: pointer;
  font-size: 10px;
  @media ${theme.media.tablet} {
    height: 30px;
    font-size: 14px;
  };
  @media ${theme.media.desktop} {
    height: 40px;
    font-size: 18px;
  };
`;

export const FooterDiv = styled.div`
  display: flex;
`;