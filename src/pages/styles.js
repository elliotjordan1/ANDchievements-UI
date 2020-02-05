import styled from 'styled-components';
import theme from '../global/theme';

const AppWrapper = styled.div`
  padding-top: 48px;
  @media ${theme.media.tablet}{
    padding-top: 64px;
  };
  @media ${theme.media.desktop}{
    padding-top: 88px;
  };
`;

export default AppWrapper;