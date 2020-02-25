import styled from 'styled-components';
import theme from '../../global/theme';

export const FormTitle = styled.div`
  color: ${theme.colours.brand.red};
  background-color: ${theme.colours.brand.grey2};
  font: 500 20px ${theme.fontFamily.primary};
  line-height: 1.4;
  letter-spacing: 2px;
  width: 100%;
  text-indent: 8px;
  height: min-content;
  @media ${theme.media.tablet} {
    font-size: 24px;
  };
  @media ${theme.media.desktop} {
    font-size: 32px;
  };
`;

export const Background = styled.div`
  width: 100vw;
  height 100vh;
  z-index: 2;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 48px;
  @media ${theme.media.tablet}{
    top: 64px;
  };
  @media ${theme.media.desktop}{
    top: 88px;
  };
`;

export const ModalBody = styled.div`
  max-width: 800px;
  flex-direction: column;
  height: max-content;
  margin: 15vh 8px;
  z-index: 1;
  background-color: white;
  display: flex;
  @media ${theme.media.tablet}{
    margin: 30px auto;
    height: 50vh;
    max-width: 660px
  };
  @media ${theme.media.desktop}{
    margin: 30px auto;
    height: 400px;
  };
`;