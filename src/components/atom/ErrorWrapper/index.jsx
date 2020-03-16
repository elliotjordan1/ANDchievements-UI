import styled from 'styled-components';
import theme from '../../../global/theme';
import HomepageWrapper from '../HomepageWrapper';

export default styled(HomepageWrapper)`
  color: ${theme.colours.brand.red};
  font-family: ${theme.fontFamily.primary};
  font-size: 22px;
  font-weight: 300;
  justify-content: center;
  line-height: 20;
  text-align: center;
`;
