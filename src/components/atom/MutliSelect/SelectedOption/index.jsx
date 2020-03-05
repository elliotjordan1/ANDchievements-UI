import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

export default styled.div`
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