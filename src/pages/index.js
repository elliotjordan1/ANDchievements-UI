import React from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import data from '../assets/mockData.json';

const Homepage = () => {
  return (
    <>
    {data.projects.map((project) => 
      <ProjectSummary key={project.id} projectName={project.name} projectClient={project.client} projectImageURL={project.imageURL}/>
    )}
    </>
  )
};

export default Homepage;
