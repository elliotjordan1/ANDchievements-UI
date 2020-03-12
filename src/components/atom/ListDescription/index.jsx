import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > em{
    color: ${theme.colours.brand.light};
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    @media ${theme.media.tablet}{
      font-size: 14px;
    };
    @media ${theme.media.desktop}{
      font-size: 16px;
    }
  }
`;