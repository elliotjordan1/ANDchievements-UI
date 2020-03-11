import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('FormTitle component', () => {
  it('renders correctly', () => {
    const component = <Component text ="FormTitle!" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});