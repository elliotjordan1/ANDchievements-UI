import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('AndiListItem component', () => {
  it('renders correctly', () => {
    const andi = {
      imageURL : 'http://image.url',
      name: 'Jose',
      andiProjectRole: 'PD'
    };

    const component = <Component andi={andi} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
