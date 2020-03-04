import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../global/theme';

const Area = styled.textarea`
    width: 100%;
    margin: 4px 0;
    padding: 4px 4px;
    box-sizing: border-box;
    resize: none;
    border: none;
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

const TextArea = ({
  maxLength,
  placeholder
}) => <Area maxLength={maxLength} placeholder={placeholder} />

TextArea.propTypes = {
  maxLength: PropTypes.number,
  placeholder: PropTypes.string
};

TextArea.defaultProps = {
  maxLength: 40,
  placeholder: ''
};

export default TextArea;
