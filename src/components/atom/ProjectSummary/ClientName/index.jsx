import styled from 'styled-components';
import ProjectName from '../ProjectName';
import theme from '../../../../global/theme';

export default styled(ProjectName)`
text-transform: none;
line-height: 1.1;
margin-bottom: 0;
font-weight: 500;
color: white;
text-align: center;
background-color: black;
@media ${theme.media.desktop}{
  height: 36px;
}
`;