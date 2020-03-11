import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import theme from '../../../global/theme';

const FormSelect = styled(CreatableSelect)`
    width: 100%;
    box-sizing: border-box;
    border:  1px solid black;
    margin: 8px 0;
    .css-yk16xz-control {
      min-height: 40px;
      border: 0px;
    }
    font: 300 12px ${theme.fontFamily.primary};
    height: 40px;
    @media ${theme.media.tablet} {
        font-size: 14px;
        margin: 8px 0 16px 0;
        height: 40px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
        height: 50px;
        margin: 8px 0 24px 0;
    };
`;


export default FormSelect;
