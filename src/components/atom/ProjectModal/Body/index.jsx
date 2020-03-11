import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
line-height: 1.25;
background-color: white;
display: flex;  
width: 100%;
height: 100%;
flex-direction: column;
color: ${theme.colours.brand.grey};
@media ${theme.media.tablet}{
  width: 40%;
  min-width: 280px;
};
@media ${theme.media.desktop}{
  min-width: 530px;
}
`;