import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

describe('MultiSelect - MultiSelectOptions component', () => {
  it('renders correctly with default props', () => {
    const component = <Component value = "TestValue" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with all props', () => {
    const component = <Component value = "TestValue" onClick = {() => {}} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('fires onClick when clicked', () => {
    const onClickFunc = jest.fn();

    const { getByText}  = render(<Component value = "TestValue" onClick={onClickFunc}/>);

    const input = getByText('TestValue');

    expect(onClickFunc).toHaveBeenCalledTimes(0);

    fireEvent.click(input);

    expect(onClickFunc).toHaveBeenCalledTimes(1);
  });
});
