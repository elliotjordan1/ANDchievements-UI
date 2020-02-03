import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe('Header component', () => {
  it("renders correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});