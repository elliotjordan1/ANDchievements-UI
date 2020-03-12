import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
background-image: ${ ({ image })  => `url(${image})`};
background-size: cover;
background-position: center;
padding-top: 200px;
width: 100%;
display: flex;
@media ${theme.media.tablet}{
  width: 60%;
  padding: 0;
  height: 100%;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
};
@media ${theme.media.desktop}{
  background-size: cover;
}
`;