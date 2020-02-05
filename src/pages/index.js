import React, { useState } from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import data from '../assets/mockData.json';
import HomepageWrapper from '../global/styles';
import ProjectModal from '../components/ProjectModal/ProjectModal';

const Homepage = () => {
  const [modal, setModal] = useState(0);
  const [viewModal, setViewModal] = useState(false);

  const boxClick = id => {
    setModal(id);
    setViewModal(true);  
  };

  return (
    <HomepageWrapper>
      {viewModal ? 
        <ProjectModal image={data.projects[modal].imageURL} name={data.projects[modal].name} client={data.projects[modal].client} blurb={data.projects[modal].blurb} ANDis={data.projects[modal].ANDis} techStack={data.projects[modal].techStack} onClick={() => {setViewModal(false)}}/> 
      : null}
      {data.projects.map((project) => 
        <ProjectSummary 
          onClick = {() => {boxClick(project.projectId)}} 
          key={project.projectId} 
          projectName={project.name} 
          projectClient={project.client} 
          projectImageURL={project.imageURL}
        />
      )}
    </HomepageWrapper>
  )
};

export default Homepage;
