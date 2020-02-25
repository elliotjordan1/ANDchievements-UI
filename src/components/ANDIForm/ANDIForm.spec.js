import React from 'react';
import { render } from '@testing-library/react';
import ANDIForm from './ANDIForm';

describe('Form Modal component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ANDIForm name='Test User' />);
    expect(wrapper).toMatchSnapshot();
  });
});
