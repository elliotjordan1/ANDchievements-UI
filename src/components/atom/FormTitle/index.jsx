import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../global/theme';

const Title = styled.div`
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

const FormTitle = ({
  children
}) => <Title>{children}</Title>

FormTitle.propTypes = {
  children: PropTypes.func.isRequired
};

export default FormTitle;
