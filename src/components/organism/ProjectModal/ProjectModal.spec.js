import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from '.';
import mockData from '../../../assets/mockData.json';

const project = mockData.projects[0];

const mockFunc = jest.fn;

describe('Header component', () => {
  it('renders correctly with mock project', () => {
    const component = <ProjectModal
                        project={project} 
                        onClick={mockFunc}/>;

    const wrapper = render(component);
    
    expect(wrapper).toMatchSnapshot();
  });
});
