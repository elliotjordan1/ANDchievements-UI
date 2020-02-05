import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from './ProjectModal';

const mockFunc = jest.fn;

describe('Header component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectModal image="http://2.bp.blogspot.com/_xmTzO3Zx0ZQ/TJCcIqVZGoI/AAAAAAAAE1M/fR7XKlnGR20/s1600/robot-posters-inspiration-01.jpg" onClick={mockFunc}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
