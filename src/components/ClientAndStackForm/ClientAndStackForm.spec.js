import React from 'react';
import { render } from '@testing-library/react';
import TechStackForm from './ClientAndStackForm';

describe('Form Modal component', () => {
  it('renders correctly for a client', () => {
    const wrapper = render(<TechStackForm name='Test Stack' isClient />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for a Tech Stack', () => {
    const wrapper = render(<TechStackForm name='Test Stack' />);
    expect(wrapper).toMatchSnapshot();
  });
});
