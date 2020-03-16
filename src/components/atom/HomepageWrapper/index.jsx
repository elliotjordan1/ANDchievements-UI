import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  align-content: row;
  background-color: ${theme.colours.brand.base};
  min-height: calc(100vh - 78px);
  @media ${theme.media.tablet}{
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - 114px);
  }
  @media ${theme.media.desktop}{
    min-height: calc(100vh - 153px);

  }
`;