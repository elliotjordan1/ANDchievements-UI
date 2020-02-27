import React, { useState, useEffect } from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import HomepageWrapper from '../global/styles';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import getAllProjects from '../api/handlers/projects';


export const shuffleAndSliceArray = (array, sliceLength) => {
  const arrayLength = array.length;

  const shuffledArray = array.sort(() => Math.random() - 0.5);
  
  return shuffledArray.slice(0, arrayLength > sliceLength ? sliceLength : arrayLength);
}

const Homepage = () => {
  const [modal, setModal] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [projects, setProjects] = useState(undefined);

  const boxClick = id => {
    setModal(id);
    setViewModal(true);  
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      setProjects(response.data.projects);
    };

    if (projects === undefined) {
      fetchProjects();
    } 
  });
  
  return (
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
          ANDis={shuffleAndSliceArray(projects[modal].andis, 8)} 
          techStack={shuffleAndSliceArray(projects[modal].techstack, 5)} 
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
