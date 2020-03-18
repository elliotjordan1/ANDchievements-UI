import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('AttributeFormTitle component', () => {
  it('renders correctly', () => {
    const component = <Component>AttributeFormTitle</Component>;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
