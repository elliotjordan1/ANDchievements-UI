import styled from 'styled-components';
import theme from '../../global/theme';

export const Input = styled.input`
    width: 100%;
`;

export const MultiSelectWrapper = styled.div`
`;

export const Options = styled.div`
    border: solid 1px grey;
    padding: 10px 12px;
    width: 100%;
    color: ${theme.colours.brand.red};
    background: white;

`;

export const OptionsWrapper = styled.div`
position: absolute;
z-index: 99999;
display: ${({visible}) => visible ? 'block' : 'none'};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;