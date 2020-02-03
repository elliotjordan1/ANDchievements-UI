import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.div`
  background-color: ${theme.colours.brand.red};
  width: 100%;
  height: 47px;
  display: flex;
   & > svg{
     display: block;
     align-self: center;
     margin-left: 12px;
   }
`;

export const LogoWrapper = styled.div`
  width: 160px;
  height: 37px;

`;
