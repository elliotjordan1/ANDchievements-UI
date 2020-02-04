import styled from 'styled-components';
import theme from '../theme';

export const SummaryBox = styled.div`
  width: 358px;
  height: 300px;
  background-color: #ff0;
  display: flex;
  flex-direction: row;
  margin: 10px auto 0;
  cursor: pointer;
  : active {
    transform: translateY(1px);
    background-color: #dd0;
  }
`;

export const ProjectName = styled.div`
  display: block;
  width: max-content;
  padding: 5px;
  text-transform: uppercase;
  height: 37px;
  font-family: ${theme.fontFamily.primary};
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.05em;
  line-height: 1.35;
  bottom: 0;
  margin: 3px 0 8px 8px;
  color: ${theme.colours.brand.grey};
  background-color: white;
`;

export const ClientName = styled(ProjectName)`
  height: 36px;
  text-transform: none;
  line-height: 1.25;
  margin-bottom: 0;
  font-weight: 500;
  color: white;
  text-align: center;
  background-color: black;
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  position: relative;
`;
