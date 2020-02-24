import styled from 'styled-components';
import theme from '../../global/theme';

export const FormTitle = styled.div`
    background-color: black;
    color: white;
    font: 500 24px ${theme.fontFamily.primary};
    line-height: 1.4;
    letter-spacing: 2px;
    width: 100%;
    text-indent: 8px;
    height: min-content;
    @media ${theme.media.tablet} {
        font-size: 32px;
    };
    @media ${theme.media.desktop} {
        font-size: 45px;
    };
`;

export const FormBody = styled.div`
    background-color: white;
    margin: 8px auto;
    padding: 8px 8px 24px 8px;
    @media ${theme.media.tablet} {
        padding: unset;
        width: 540px;
        min-height: 50vh;
        margin: 16px auto;
    };
    @media ${theme.media.desktop} {
        width: 634px;
        margin: 32px auto;
    };
`;

export const Label = styled.div`
    font: 500 16px ${theme.fontFamily.primary};
    letter-spacing: 1px;
    @media ${theme.media.tablet} {
        font-size: 18px;
    };
    @media ${theme.media.desktop} {
        font-size: 20px;
    };
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    border:  1px solid black;
    margin: 8px 0;
    font: 300 14px ${theme.fontFamily.primary};
    height: 40px;
    @media ${theme.media.tablet} {
        font-size: 16px;
        margin: 8px 0 16px 0;
        height: 40px;
        padding-left: 16px;
    };
    @media ${theme.media.desktop} {
        font-size: 18px;
        height: 50px;
        margin: 8px 0 24px 0;
    };
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
    resize: none;
    border: none;
    font: 300 14px ${theme.fontFamily.primary};
    height: 41px;
    margin: none;
    @media ${theme.media.tablet} {
        font-size: 16px;
        height: 51px;
        padding: 4px 16px;
    };
    @media ${theme.media.desktop} {
        font-size: 18px;
        height: 51px;
    };
`;

export const InputContainer = styled.div`
    border: 1px solid black;
    margin: 8px 0;
    @media ${theme.media.tablet} {
        margin: 8px 0 16px 0;
    };
    @media ${theme.media.desktop} {
        margin: 8px 0 24px 0;
    };
`;

export const SubmitButton = styled.button`
    background-color: ${theme.colours.brand.red};
    width: 120px;
    height: 40px;
    display: block;
    margin: 8px auto;
    border: none;
    color: white;
    font: 500 14px ${theme.fontFamily.primary};
    letter-spacing: 2px;
    margin-top: 8px;
    @media ${theme.media.tablet} {
        width: 160px;
        height: 50px;
        font-size: 16px;
        letter-spacing: 2px;
        margin-top: 16px;
    };
    @media ${theme.media.desktop} {
        width: 200px;
        height: 60px;
        font-size: 18px;
        letter-spacing: 3px;
        margin-top: 24px;
    };
`;