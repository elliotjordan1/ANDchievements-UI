import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  max-width: 100%;
  font-family: ${theme.fontFamily.primary};
  font-size: 12px;
  text-indent: 16px;
  line-height: 1.4;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.05em;
  font-weight: 300;
  height: max-content;
  margin-bottom: 16px;
  margin-left: 8px;
  @media ${theme.media.tablet}{
    font-size: 14px;
  };
  @media ${theme.media.desktop}{
    font-size: 18px;
  }
`;