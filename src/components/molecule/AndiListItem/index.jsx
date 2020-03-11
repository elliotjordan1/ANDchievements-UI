import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalListItem,
  ListDescription,
  Icon
} from '../../atom';

const ANDiListItem = ({andi}) => {
  const { andiId, imageURL, name, andiProjectRole } = andi;

  return (
    <VerticalListItem key={andiId}>
      <Icon image={imageURL}/>
      <ListDescription>
        {name}
        <em>{andiProjectRole}</em>
      </ListDescription>
    </VerticalListItem>
  )
}

ANDiListItem.propTypes = {
  andi: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ANDiListItem
