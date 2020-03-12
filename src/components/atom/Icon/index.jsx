import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  background-image: ${ ({ image })  => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 40px;
  width: 40px;
  @media ${theme.media.tablet}{
    height: 50px;
    width: 50px;
  };
  @media ${theme.media.desktop}{
    height: 60px;
    width: 60px;
  }
`;