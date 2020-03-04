import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import theme from '../../global/theme';
import { MultiSelectWrapper } from '../MultiSelect/styles';

export const Label = styled.label`
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
    @media ${theme.media.tablet} {
        width: 10%;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
    };
    @media ${theme.media.desktop} {
        width: 100%;
        font-size: 22px;
        padding-top: 7px;
        padding-bottom: 7px;

    }
`;

export const FormTitle = styled.div`
    background-color: black;
    color: white;
    font: 500 22px ${theme.fontFamily.primary};
    line-height: 1.4;
    letter-spacing: 2px;
    width: 100%;
    text-indent: 8px;
    height: min-content;
    @media ${theme.media.tablet} {
        font-size: 28px;
    };
    @media ${theme.media.desktop} {
        font-size: 36px;
    };
`;

export const FormBody = styled.div`
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

export const FormInput = styled.input`
    width: 100%;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    @media ${theme.media.tablet} {
        font-size: 18px;
        margin-top: 3px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
        margin-top: 5px;
    }
    padding: 0 8px;
    box-sizing: border-box;
    border:  1px solid black;
    margin: 4px 0 8px 0;
    font: 300 12px ${theme.fontFamily.primary};
    height: 40px;
    @media ${theme.media.tablet} {
        font-size: 14px;
        margin: 4px 0 16px 0;
        height: 40px;
        padding-left: 16px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
        height: 50px;
    };
`;

export const Form = styled.form`
    & ${MultiSelectWrapper} > ${FormInput}{
        font-size: 16px;
        font-family: ${theme.fontFamily.primary};
        @media ${theme.media.tablet} {
            font-size: 18px;
        };
        @media ${theme.media.desktop} {
            font-size: 22px;
        };
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    margin: 4px 0;
    padding: 4px 4px;
    box-sizing: border-box;
    resize: none;
    border: none;
    height: 150%;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    @media ${theme.media.tablet} {
        font-size: 18px;
        margin-top: 3px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
        margin-top: 5px;
    };
`;

export const MultiSelect = styled(CreatableSelect)`
    width: 100%;
    @media ${theme.media.tablet} {
        font-size: 18px;
        margin-top: 3px;
    };
    @media ${theme.media.desktop} {
        font-size: 22px;
        margin-top: 5px;
        backround-color: blue;
    };
`;

export const Button = styled(FormInput)`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: white;;
    background-color: ${theme.colours.brand.red};
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    @media ${theme.media.tablet} {
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    };
    @media ${theme.media.desktop} {
    font-size: 22px;
    padding-top: 15px;
    padding-bottom: 15px;
    }
    font: 300 12px ${theme.fontFamily.primary};
    height: 41px;
    margin: none;
    @media ${theme.media.tablet} {
        font-size: 14px;
        height: 51px;
        padding: 4px 16px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
        height: 51px;
    };
`;

export const InputContainer = styled.div`
    border: 1px solid black;
    margin: 4px 0 8px 0;
    @media ${theme.media.tablet} {
      margin: 4px 0 16px 0;
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