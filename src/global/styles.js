import styled from 'styled-components';
import theme from './theme';

const HomepageWrapper = styled.div`
  align-content: row;
  @media ${theme.media.tablet}{
    display: flex;
    flex-wrap: wrap;
  }
`;

export default HomepageWrapper;