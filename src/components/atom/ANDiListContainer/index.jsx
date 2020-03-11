import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
list-style-type: none;
font-family: ${theme.fontFamily.primary};
font-weight: 400;
line-height: 2.4;
letter-spacing: 0.1em;
color: ${theme.colours.brand.grey};
margin: 0 20px;
padding: 0;
max-width: 50%;
max-height: 40%;
flex-direction: column;
overflow: scroll;
max-height: 30%;
flex-wrap: wrap;
max-width: 100%;
font-size: 18px;
@media ${theme.media.tablet}{
  font-size: 20px;
  max-height: 40%;
};
@media ${theme.media.desktop}{
  font-size: 28px;
  display: flex;
  overflow: visible;
}
`;