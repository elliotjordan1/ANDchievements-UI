import React from 'react';
import { render } from '@testing-library/react';
import ProjectSummary from '.';
import data from '../../../assets/mockData.json';

const mockFunc = jest.fn;

describe('ProjectSummary', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectSummary projectName={data.projects[0].name} projectClient={data.projects[0].client} projectImageURL={data.projects[0].imageURL} onClick={mockFunc}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
