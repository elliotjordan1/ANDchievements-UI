import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  display: block;
  align-self: center;
  height: 24px;
  margin: 15px auto 10px 15px;
  cursor: pointer;
  & > svg{
    height: 24px;
    width: 143px;
  }
  @media ${theme.media.tablet} {
    height: 37px;
    & > svg{
      height: 37px;
      width: 216px;
      margin-left: 15px;
    }
  };
  @media ${theme.media.desktop} {
    height: 56px;
    & > svg{
      height: 56px;
      width: 326px;
      margin-left: 15px;
    }
  };
  };
`;
