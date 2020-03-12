import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('SubmitButton component', () => {
  it('renders correctly with onClick', () => {
    const component = <Component onClick = {() => {}} text = "SUBMIT" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly without onClick', () => {
    const component = <Component text = "SUBMIT" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
