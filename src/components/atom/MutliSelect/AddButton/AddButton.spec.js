import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

describe('MultiSelect - AddButton component', () => {
  it('renders correctly with default props', () => {
    const component = <Component labelText = "Add" buttonType = "Submit" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with all props', () => {
    const component = <Component labelText = "Add" buttonType = "Submit" onClick={() => {}} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('fires the onClickFunction when clicked', () => {
    const onClickFunc = jest.fn();

    const { getByText } = render(<Component labelText = "Add" buttonType = "Submit" onClick={onClickFunc} />);

    const input = getByText('Add');

    expect(onClickFunc).toHaveBeenCalledTimes(0);
    
    fireEvent.click(input);

    expect(onClickFunc).toHaveBeenCalledTimes(1);
  });
});
