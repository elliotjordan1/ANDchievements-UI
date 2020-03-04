import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  it('renders correctly', () => {
    const wrapper = render(<Header><p>Some Tesxt</p></Header>);
    expect(wrapper).toMatchSnapshot();
  });
});
