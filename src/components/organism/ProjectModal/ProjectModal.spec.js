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
  it ('successfully generates andiListComponent', () => {
    const andis = [
      {
        andiid : '1',
        imageURL: 'image.url',
        name: 'andi',
        andiProjectRole: 'PD'
      }
    ];

    const projectWithANDis = {
      ...project,
      andis
    };

    const component = render(<ProjectModal project = {projectWithANDis}  onClick={mockFunc}/>);

    expect(component).toMatchSnapshot();
  });
  it ('successfully generates techistComponent', () => {
    const techstack = [
      {
        technologyid : '1',
        imageURL: 'image.url'
      }
    ];

    const projectWithTechs = {
      ...project,
      techstack
    };

    const component = render(<ProjectModal project = {projectWithTechs}  onClick={mockFunc}/>);

    expect(component).toMatchSnapshot();
  });
  it ('successfully generates with blurb two and blurb three', () => {
    const projectWithBlurbs = {
      ...project,
      blurb_two: 'I am blurb two',
      blurb_three: 'I am blurb three'
    };

    const component = render(<ProjectModal project = {projectWithBlurbs}  onClick={mockFunc}/>);

    expect(component).toMatchSnapshot();
  });
});
