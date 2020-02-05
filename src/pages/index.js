import React from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import data from '../assets/mockData.json';
import HomepageWrapper from '../global/styles';

const Homepage = () => {
  return (
    <HomepageWrapper>
      {data.projects.map((project) => 
        <ProjectSummary key={project.id} projectName={project.name} projectClient={project.client} projectImageURL={project.imageURL}/>
      )}
    </HomepageWrapper>
  )
};

export default Homepage;
