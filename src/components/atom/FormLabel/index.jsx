import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../global/theme';

const Label = styled.div`
    font: 500 12px ${theme.fontFamily.primary};
    letter-spacing: 1px;
    @media ${theme.media.tablet} {
        font-size: 14px;
    };
    @media ${theme.media.desktop} {
        font-size: 16px;
    };
`;

const FormLabel = ({
  labelText,
  onClick
}) => <Label onClick = {onClick}>{labelText}</Label>

FormLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

FormLabel.defaultProps = {
  onClick: undefined
}

export default FormLabel;
