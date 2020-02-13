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
        padding-top: 30px;
        padding-bottom: 30px;
`;

export const Input = styled.input`
    width: 60%;
    font-family: ${theme.fontFamily.primary};
`;

export const TextArea = styled.textarea`
    width: 60%;
    height: 150%;
    font-family: ${theme.fontFamily.primary};
`;