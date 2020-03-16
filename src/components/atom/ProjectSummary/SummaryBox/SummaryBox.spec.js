import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('ProjectSummary - SummaryBox', () => {
  it('renders correctly with no props', () => {
    const component = <Component />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with props', () => {
    const component = <Component image = 'http://image.url' />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with on click', () => {
    const component = <Component image = 'http://image.url' onClick={jest.fn()}/>;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
