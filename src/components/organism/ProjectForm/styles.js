/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import theme from '../../../global/theme';

export const InputContainer = styled.div`
    border: 1px solid black;
    margin: 4px 0 8px 0;
    @media ${theme.media.tablet} {
      margin: 4px 0 16px 0;
    };
`;