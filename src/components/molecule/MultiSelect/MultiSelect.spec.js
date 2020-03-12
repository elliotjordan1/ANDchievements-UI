import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

const optionList = [
  {
    id: 1,
    value: 1,
    label: 'Jess'
  }
]

describe('TechListItem component', () => {
  it('renders correctly with optionList prop', () => {
    const RenderedComponent = () => <Component 
                                        name='test' 
                                        value='test' 
                                        visible 
                                        onSelect={jest.fn()} 
                                        onRemove={jest.fn()} 
                                        onChange={jest.fn()}
                                        selectedValues={optionList} 
                                        optionList={optionList} 
                                        placeholder = "PLACEHOLDER" />;

    const wrapper = render(<RenderedComponent />);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with selected options and adds option successfully', () => {
    const onSelect = jest.fn();

    const RenderedComponent = () => <Component 
                                      name='test' 
                                      value='test' 
                                      visible 
                                      onSelect={onSelect} 
                                      onRemove={jest.fn()} 
                                      onChange={jest.fn()}
                                      selectedValues={optionList} 
                                      optionList={optionList} 
                                      placeholder = "PLACEHOLDER" />;

    const { component, getByText } = render(<RenderedComponent />);

    expect(component).toMatchSnapshot();

    const input = getByText('Jess');

    expect(onSelect).toHaveBeenCalledTimes(0);

    fireEvent.click(input);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
  it('renders correctly with selected options and removes option successfully', () => {
    const onRemove = jest.fn();

    const RenderedComponent = () => <Component 
                                        name='test' 
                                        value='test' 
                                        visible 
                                        onSelect={jest.fn()} 
                                        onRemove={onRemove} 
                                        onChange={jest.fn()}
                                        selectedValues={optionList} 
                                        optionList={optionList} 
                                        placeholder = "PLACEHOLDER" />;

    const { component, getByText } = render(<RenderedComponent />);

    expect(component).toMatchSnapshot();

    const input = getByText('x');

    expect(onRemove).toHaveBeenCalledTimes(0);

    fireEvent.click(input);

    expect(onRemove).toHaveBeenCalledTimes(1);
  })
});
