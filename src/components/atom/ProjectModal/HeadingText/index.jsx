import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
display: block;
width: 100% - 20px;
text-transform: uppercase;
height: min-content;
font-family: ${theme.fontFamily.primary};
font-weight: 500;
font-family: 'Roboto';
letter-spacing: 0.05em;
padding: 2px 10px;
line-height: 1;
color: ${theme.colours.brand.red};
background-color: ${theme.colours.brand.grey2};
font-size: 28px;
& > em{
  color: ${theme.colours.brand.grey};
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
}
@media ${theme.media.tablet}{
  line-height: 1.1;  
  font-size: 28px;
  padding: 10px 10px;
  & > em{
    color: ${theme.colours.brand.grey};
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
  }
};
@media ${theme.media.desktop}{
  font-size: 38px;
  line-height: 1.1;
  & > em{
    color: ${theme.colours.brand.grey};
    line-height: 0.4;
    font-size: 32px;
    font-weight: 300;
    font-style: normal;
  }
};
`;