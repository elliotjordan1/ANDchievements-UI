import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  background-color: ${theme.colours.brand.red};
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 48px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${theme.media.tablet} {
    height: 64px;
  };
  @media ${theme.media.desktop} {
    height: 88px;
  };
`;