import React, { useState, useEffect } from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import getAllProjects from '../api/handlers/getprojects/getProjects';
import { HomepageWrapper, ErrorWrapper } from '../global/styles';
import getAllTechnologies from '../api/handlers/getTechnologies';

const Homepage = () => {
  const [modal, setModal] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);
getAllTechnologies();
  const boxClick = id => {
    setModal(id);
    setViewModal(true);  
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      if(response.status === 200){
        setProjects(response.projects);
      }
      else{
        setError(response.message);
      }
    };

    if (projects === undefined) {
      fetchProjects();
    } 
  });
  
  return (
    error ? (<ErrorWrapper >{error}</ErrorWrapper>) :
    <HomepageWrapper>
      {
        (viewModal && (
          <ProjectModal 
          image={projects[modal].imageurl} 
          name={projects[modal].name} 
          client={projects[modal].client} 
          blurbOne={projects[modal].blurb_one}
          blurbTwo={projects[modal].blurb_two}
          blurbThree={projects[modal].blurb_three} 
          ANDis={projects[modal].andis} 
          techStack={projects[modal].techstack} 
          logo={projects[modal].clientlogourl}
          onClick={() => {setViewModal(false)}}/> 
        ))
        }
        {
        (projects && projects.map((project, index) => 
          <ProjectSummary 
            onClick = {() => {boxClick(index)}} 
            key={project.projectid} 
            projectName={project.name} 
            projectClient={project.client} 
            projectImageURL={project.imageurl}
          />
        ))
      }
    </HomepageWrapper>
  )
};

export default Homepage;
