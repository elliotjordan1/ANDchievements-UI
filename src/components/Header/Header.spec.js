import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header component', () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Header />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});