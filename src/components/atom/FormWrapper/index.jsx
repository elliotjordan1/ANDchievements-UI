import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.form`
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  min-height: 800px;
  @media ${theme.media.tablet}{
    margin: 25px 30px;
    height: min-content;
  }
  @media ${theme.media.desktop}{
    margin: 45px 70px;
  }
`;