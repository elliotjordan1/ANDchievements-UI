import styled from 'styled-components';
import theme from './theme';

export const HomepageWrapper = styled.div`
  align-content: row;
  background-color: ${theme.colours.brand.base};
  min-height: calc(100vh - 78px);
  @media ${theme.media.tablet}{
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - 114px);
  }
  @media ${theme.media.desktop}{
    min-height: calc(100vh - 153px);

  }
`;

export const TextWrapper = styled.div`
  align-self: flex-end;
  position: relative;
  width: 100%;
`;

export const ErrorWrapper = styled(HomepageWrapper)`
  color: ${theme.colours.brand.red};
  font-family: ${theme.fontFamily.primary};
  font-size: 22px;
  font-weight: 300;
  justify-content: center;
  line-height: 20;
  text-align: center;
`;

export const FormWrapper = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  @media ${theme.media.tablet}{
    margin: 25px 30px;
    height: min-content;
  }
  @media ${theme.media.desktop}{
    margin: 45px 70px;
  }
`;