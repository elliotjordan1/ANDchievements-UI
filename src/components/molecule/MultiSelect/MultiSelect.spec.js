import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

describe('TechListItem component', () => {
  it('renders correctly with optionList prop', () => {
    const optionList = [1, 2, 3];

    const component = <Component optionList={optionList} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with placeholder prop', () => {
    const placeholder = 'Placeholder';

    const component = <Component placeholder={placeholder} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with no props', () => {
    const component = <Component />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with props', () => {
    const placeholder = 'Placeholder';
    const optionList = [1, 2, 3];

    const component = <Component placeholder={placeholder} optionList={optionList} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
