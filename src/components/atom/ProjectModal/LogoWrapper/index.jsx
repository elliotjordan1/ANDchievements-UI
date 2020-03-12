import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
background-image: ${ ({ image })  => `url(${image})`};
z-value: 3;
display: flex;
align-self: flex-end;
background-size: contain;
background-repeat: no-repeat;
background-position-y: bottom;
width: 175px;
height: 70px;
@media ${theme.media.tablet}{
  width: 200px;
  height: 75px;
};
@media ${theme.media.desktop}{
  width: 300px;
  height: 100px;
}
`;