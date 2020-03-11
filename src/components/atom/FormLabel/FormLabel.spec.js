import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('FormLabel component', () => {
  it('renders correctly', () => {
    const component = <Component labelText = "Label text!"/>;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
