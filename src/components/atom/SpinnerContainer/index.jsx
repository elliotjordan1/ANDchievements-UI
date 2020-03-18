import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  padding: 8px 8px 24px 8px;
  width: 10px;
  margin-left: 20%;
  margin-right: auto;
  @media ${theme.media.desktop} {
      width: 10px;
      margin-left: 25%;
  };
`;