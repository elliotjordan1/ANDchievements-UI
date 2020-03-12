import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

describe('FormInput component', () => {
  it('renders correctly with required props', () => {
    const component = <Component maxLength ={20} placeholder="I am an input" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with hidden border', () => {
    const component = <Component hiddenBorder maxLength ={20} placeholder="I am an input" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly without hidden border', () => {
    const component = <Component maxLength ={20} placeholder="I am an input" />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with default value', () => {
    const component = <Component maxLength ={20} placeholder="I am an input" value="12" onChange={() => {}} />;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with default value and onChange', () => {
    const component = <Component maxLength ={20} placeholder="I am an input" value="12" onChange={() => {}}/>;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with the correct value for default value', () => {
    const { getByPlaceholderText } = render(<Component maxLength ={20} placeholder="I am an input" value="12" onChange={() => {}} />);

    const input = getByPlaceholderText('I am an input');

    expect(input.value).toBe('12');
  });
  it('hits the on change function when input text changed', () => {
    const onChangeFunc = jest.fn();

    const { getByPlaceholderText } = render(<Component maxLength ={20} placeholder="I am an input" value="12" onChange={onChangeFunc}/>);

    const input = getByPlaceholderText('I am an input');

    expect(input.value).toBe('12');
    expect(onChangeFunc).toHaveBeenCalledTimes(0);

    fireEvent.change(input, { target: { value: '23' }});

    expect(onChangeFunc).toHaveBeenCalledTimes(1);
  });
});
