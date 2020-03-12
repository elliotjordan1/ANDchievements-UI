import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('MultiSelect - OptionsWrapper component', () => {
  it('renders correctly with visible flag set to true', () => {
    const component = (<Component visible>{[1, 2,3]}</Component>);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with visible flag set to false', () => {
    const component = (<Component visible={false}>{[1, 2,3]}</Component>);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with all props', () => {
    const component = (<Component visible arrayLength={20}>{[1, 2,3]}</Component>);

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
