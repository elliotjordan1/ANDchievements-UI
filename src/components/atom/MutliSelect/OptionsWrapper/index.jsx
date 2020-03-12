import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../../global/theme';

const Wrapper = styled.div`
    height: ${({arrayLength}) => arrayLength ? `${(arrayLength * 45)}px` : '0px'};
    overflow: scroll;
    display: ${({visible}) => visible ? 'block' : 'none'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-wrap: wrap;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 45px;
    @media ${theme.media.tablet} {
      height: ${({arrayLength}) => arrayLength ? `${(arrayLength + 1) * 40}px` : '0px'}
    };
    @media ${theme.media.desktop} {
      height: ${({arrayLength}) => arrayLength ? `${(arrayLength + 1) * 40}px` : '0px'}
    };
`;

export const OptionsWrapper = ({
  arrayLength,
  visible
}) => <Wrapper visible = {visible} arrayLength = {arrayLength} />

OptionsWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
  arrayLength: PropTypes.number
}

OptionsWrapper.defaultProps = {
  arrayLength: undefined
}

export default OptionsWrapper;