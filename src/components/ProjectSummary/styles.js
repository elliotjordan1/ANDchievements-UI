import styled from 'styled-components';
import theme from '../../global/theme';

export const SummaryBox = styled.div`
  width: 358px;
  height: 300px;
  display: flex;
  background-image: ${ ({ image })  => `url(${image})`};
  background-size: cover;
  background-position: center;
  flex-direction: row;
  margin: 10px auto 0;
  cursor: pointer;
  : active {
    transform: translateY(1px);
    filter: brightness(80%);
  }
  @media ${theme.media.tablet}{
    margin: 20px auto 15px;
  }
  @media ${theme.media.desktop}{
    width: 440px;
    height: 369px;
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
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  line-height: 1.2;
  bottom: 0;
  margin: 3px 0 8px 8px;
  color: ${theme.colours.brand.grey};
  background-color: white;
`;

export const ClientName = styled(ProjectName)`
  height: 36px;
  text-transform: none;
  line-height: 1.1;
  margin-bottom: 0;
  font-weight: 500;
  color: white;
  text-align: center;
  background-color: black;
`;
