import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import theme from '../../global/theme';
import { MultiSelectWrapper, Input as Option } from '../MultiSelect/styles';

export const Form = styled.form`
& ${MultiSelectWrapper} > ${Option}{
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


export const Label = styled.label`
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
    @media ${theme.media.tablet} {
        width: 70%;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
    };
    @media ${theme.media.desktop} {
        width: 50%;
        font-size: 22px;
        padding-top: 7px;
        padding-bottom: 7px;
    };
`;

export const Input = styled.input`
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
    };
`;



export const TextArea = styled.textarea`
    width: 100%;
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

export const Button = styled(Input)`
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
    };
`;