import styled from 'styled-components';
import theme from '../../global/theme';

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

export const FormWrapper = styled.form`
  margin: 16px 24px;
  height: 100%;
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

export const SubmitButton = styled.button`
    background-color: ${theme.colours.brand.red};
    width: 120px;
    height: 40px;
    cursor: pointer;
    display: block;
    margin: 8px auto;
    border: none;
    color: white;
    font: 500 14px ${theme.fontFamily.primary};
    letter-spacing: 2px;
    margin-top: 8px;
    :hover{
        opacity: 90%;
    }
    :active{
        background-color: ${theme.colours.brand.red2};
    }
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