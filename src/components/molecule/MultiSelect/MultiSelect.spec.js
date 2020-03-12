import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
  it('renders correctly with selected options and adds option successfully', () => {
    const optionList = [
      {
        value: 1,
        label: 'Jess'
      }
    ]

    const onSelect = jest.fn();

    const { component, getByText } = render(<Component visible placeholder="PLACEHOLDER" optionList={optionList} onSelect={onSelect} />);

    expect(component).toMatchSnapshot();

    const input = getByText('Jess');

    expect(onSelect).toHaveBeenCalledTimes(0);

    fireEvent.click(input);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
  it('renders correctly with selected options and removes option successfully', () => {
    const optionList = [
      {
        andiId: 1,
        andiName: 'Jess'
      }
    ]

    const onRemove = jest.fn();

    const { component, getByText } = render(<Component placeholder="PLACEHOLDER" selectedValues={optionList} onRemove={onRemove} />);

    expect(component).toMatchSnapshot();

    const input = getByText('x');

    expect(onRemove).toHaveBeenCalledTimes(0);

    fireEvent.click(input);

    expect(onRemove).toHaveBeenCalledTimes(1);
  })
});
