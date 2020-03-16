import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
  display: block;
  width: max-content;
  padding: 3px;
  text-transform: uppercase;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-size: 24px;
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  line-height: 1.2;
  bottom: 0;
  margin: 3px 0 8px 8px;
  color: ${theme.colours.brand.grey};
  background-color: white;
  @media ${theme.media.desktop}{
    font-size: 32px;
    padding: 5px;
    height: 37px;
  }
`;