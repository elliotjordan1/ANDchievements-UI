import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
  width: auto;
  height: 90vh;
  margin: 20px 10px;
  z-index: 1;
  flex-direction: column;
  display: flex;
  @media ${theme.media.tablet}{
    margin: 30px 40px;
    flex-direction: row;
    height: 85vh;
  };
  @media ${theme.media.desktop}{
    margin: 30px 40px;
    height: 85vh;
  };
`;