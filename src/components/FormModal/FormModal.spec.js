import React from 'react';
import { render } from '@testing-library/react';
import FormModal from './FormModal';

describe('Form Modal component', () => {
  it('renders correctly', () => {
    const wrapper = render(<FormModal title='Test Form Title' form={<form />} close = {() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
