import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormModal from '.';

describe('Form Modal component', () => {
  it('renders correctly', () => {
    const wrapper = render(<FormModal title='Test Form Title' form={<form />} close = {() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('closes correctly when closed', () => {
    const closeFunction = jest.fn();
    const { getByTestId } = render(<FormModal title='Test Form Title' form={<form />} close = {closeFunction} />);
    const closeIcon = getByTestId('close-icon-test');

    expect(closeFunction).toHaveBeenCalledTimes(0);

    fireEvent.click(closeIcon);

    expect(closeFunction).toHaveBeenCalledTimes(1);
  });
});
