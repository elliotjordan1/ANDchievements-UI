import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('FooterText component', () => {
  it('renders correctly', () => {
    const component = <Component href="/" text="LINK" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
