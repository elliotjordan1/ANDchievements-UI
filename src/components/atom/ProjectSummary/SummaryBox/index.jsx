import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
  width: 358px;
  height: 300px;
  display: flex;
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  flex-direction: row;
  margin: 10px auto 10px;
  cursor: pointer;
  : active {
    transform: translateY(1px);
    filter: brightness(80%);
  }
  @media ${theme.media.tablet}{
    margin: 20px auto 15px;
  }
  @media ${theme.media.desktop}{
    width: 440px;
    height: 369px;
  }
`;