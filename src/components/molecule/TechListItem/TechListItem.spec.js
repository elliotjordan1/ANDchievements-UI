import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('TechListItem component', () => {
  it('renders correctly', () => {
    const tech = {
      imageURL : 'http://image.url'
    };

    const component = <Component tech={tech} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
