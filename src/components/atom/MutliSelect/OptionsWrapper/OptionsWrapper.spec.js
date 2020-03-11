import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('MultiSelect - OptionsWrapper component', () => {
  it('renders correctly with visible flag set to true', () => {
    const component = (<Component visible />);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with visible flag set to false', () => {
    const component = (<Component visible={false} />);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with all props', () => {
    const component = (<Component visible arrayLength={20} />);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
