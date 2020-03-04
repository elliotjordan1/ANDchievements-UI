import styled from 'styled-components';
import theme from '../../global/theme';

export const MultiSelectWrapper = styled.div`
    font-family: ${theme.fontFamily.primary};
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 55px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 55px;
`;

export const OptionsWrapper = styled.div`
    height: 150px;
    overflow: scroll;
    display: ${({visible}) => visible ? 'block' : 'none'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 55px;
    @media ${theme.media.tablet} {
    height: 200px;
    };
    @media ${theme.media.desktop} {
    height: 300px;
    };
`;

export const Options = styled.div`
    font-family: ${theme.fontFamily.primary};
    border: solid 1px grey;
    padding: 10px 12px;
    color: ${theme.colours.brand.red};
    background: white;
`;

export const AddButton = styled.button`
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: white;;
    background-color: ${theme.colours.brand.red};
    font-family: ${theme.fontFamily.primary};
    font-size: 16px;
    @media ${theme.media.tablet} {
    font-size: 18px;
    };
    @media ${theme.media.desktop} {
    font-size: 22px;
    };
`;

export const SelectedOption = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140.62%;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    background-color: ${theme.colours.brand.red};
    padding: 2px;
    margin: 2px;
    font-size: 16px;
    @media ${theme.media.tablet} {
    font-size: 18px;
    padding: 3px;
    margin: 3px;
    };
    @media ${theme.media.desktop} {
    font-size: 22px;
    padding: 5px;
    margin: 5px;
    };
`;

export const RemovalButton = styled.button`
    font-style: normal;
    font-size: 18px;
    line-height: 140.62%;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    border: solid 0px;
    display: flex;
    flex-wrap: wrap;
    background-color: ${theme.colours.brand.red};
    font-size: 16px;
    @media ${theme.media.tablet} {
    font-size: 18px;
    };
    @media ${theme.media.desktop} {
    font-size: 22px;
    };
`;



