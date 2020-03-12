import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
max-width: 100%;
padding: 16px 20px 0 20px;
font-family: ${theme.fontFamily.primary};
font-size: 12px;
font-weight: 300;
text-align: justify;
max-height: 9em;
@media ${theme.media.tablet}{
  font-size: 16px;
};
@media ${theme.media.desktop}{
  font-size: 24px;
  line-height: 1.5;
}
`;