import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('HomepageWrapper component', () => {
  it('renders correctly', () => {
    const component = <Component />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
