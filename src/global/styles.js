import styled from 'styled-components';
import theme from './theme';

const HomepageWrapper = styled.div`
  align-content: row;
  @media ${theme.media.tablet}{
    display: flex;
    flex-wrap: wrap;
  }
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  position: relative;
  width: 100%;
`;

export default HomepageWrapper;