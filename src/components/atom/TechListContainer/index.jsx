import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.ul`
  list-style-type: none;
  font-family: ${theme.fontFamily.primary};
  font-weight: 400;
  line-height: 2.4;
  flex-direction: row;
  flex: content;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  letter-spacing: 0.1em;
  color: ${theme.colours.brand.grey};
  margin: 0 20px;
  padding: 0;
  bottom: 0;
  max-width: 100%;
  font-size: 18px;
  max-height: 60px;
  @media ${theme.media.tablet}{
    font-size: 22px;
    max-height: none;
  };
  @media ${theme.media.desktop}{
    font-size: 28px;
  }
`;
