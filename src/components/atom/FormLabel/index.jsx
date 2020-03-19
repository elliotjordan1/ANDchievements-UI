import styled from 'styled-components';
import theme from '../../../global/theme';

export default styled.h2`
    color: ${({error}) => error ? `${theme.colours.brand.red}` : 'black'};
    font: 500 12px ${theme.fontFamily.primary};
    letter-spacing: 1px;
    @media ${theme.media.tablet} {
        font-size: 14px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
    };
`;
