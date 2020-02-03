import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.div`
  background-color: ${theme.colours.brand.red};
  width: 100%;
  height: 47px;
`;

export const LogoWrapper = styled.div`
  width: 160px;
  height: 37px;
  margin-left: 40px;
  border-top: solid 5px ${theme.colours.brand.red};
`;
