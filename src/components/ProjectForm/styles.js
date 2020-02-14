import styled from 'styled-components';
import theme from '../../global/theme';

export const Form = styled.form`
`;

export const Label = styled.label`
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: ${theme.fontFamily.primary};
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    @media ${theme.media.tablet} {
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 10px;
    };
`;

export const Input = styled.input`
    width: 100%;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    @media ${theme.media.tablet} {
        font-size: 18px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
    };
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 150%;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    @media ${theme.media.tablet} {
        font-size: 18px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
    };
`;