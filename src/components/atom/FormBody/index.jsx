import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.div`
    background-color: white;
    margin: 8px auto;
    padding: 8px 8px 24px 8px;
    @media ${theme.media.tablet} {
        padding: unset;
        width: 400px;
        min-height: 50vh;
        margin: 16px auto;
    };
    @media ${theme.media.desktop} {
        width: 634px;
        margin: 32px auto;
    };
`;