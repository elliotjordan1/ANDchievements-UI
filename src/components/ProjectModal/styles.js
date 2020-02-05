import styled from 'styled-components';
import theme from '../../global/theme';

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

export const ModalWrapper = styled.div`
  margin: 50px 60px;
  height: 80vh;
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  z-index: 1;
`;