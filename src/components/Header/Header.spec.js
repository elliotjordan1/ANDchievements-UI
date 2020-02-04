import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it("renders correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
