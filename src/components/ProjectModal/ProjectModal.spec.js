import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from './ProjectModal';
import mockData from '../../assets/mockData.json';

const project = mockData.projects[0];

const mockFunc = jest.fn;

describe('Header component', () => {
  it('renders correctly with mock project', () => {
    const wrapper = render(<ProjectModal 
      image={project.imageURL} 
      name={project.name} 
      client={project.client} 
      blurbOne={project.blurb} 
      ANDis={project.ANDis} 
      techStack={project.techStack} 
      logo={project.clientLogoURL} onClick={mockFunc}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
