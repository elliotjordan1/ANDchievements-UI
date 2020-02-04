import styled from 'styled-components';
import theme from '../theme';

export const SummaryBox = styled.div`
  width: 358px;
  height: 300px;
  background-color: #ff0;
  display: flex;
  flex-direction: row;
  margin: 10px auto 0;
`;

export const Title = styled.div`
  display: block;
  width: max-content;
  padding: 5px;
  height: 37px;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0.1em;
  bottom: 0;
  margin: 3px 0 8px 8px;
  color: ${theme.colours.brand.grey};
  background-color: white;
`;

export const Subtitle = styled(Title)`
  height: 36px;
  margin-bottom: 0;
  letter-spacing: 0.05em;
  font-weight: 500;
  color: white;
  background-color: black;
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  position: relative;
`;
