import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
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