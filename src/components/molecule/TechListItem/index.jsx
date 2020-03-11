import React from 'react';
import PropTypes from 'prop-types';

import {
  Icon,
  HorizontalListItem
} from '../../atom';

const TechListItem = ({tech}) => {
  const { technologyId, imageURL } = tech;

  return (
    <HorizontalListItem key ={technologyId}>
      <Icon image = {imageURL} />
    </HorizontalListItem>
  )
}

TechListItem.propTypes = {
  tech: PropTypes.objectOf(PropTypes.any).isRequired
}

export default TechListItem;