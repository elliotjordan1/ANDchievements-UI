/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { ProjectModal, ProjectSummary } from '../components/organism';
import { getProjects } from '../api/handlers/attributeRetrieval';
import { HomepageWrapper, ErrorWrapper } from '../components/atom';
import { shuffleAndSliceArray } from '../global/helpers';

const SPACE_BAR_KEY_CODE = 32;
const ESCAPE_KEY_CODE = 27;
const INTERVAL_TIME = 4000;

const Homepage = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [projectModalIsActive, setProjectModalIsActive] = useState(false);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState({});
  const [isAnimating, setIsAnimtating] = useState(false);
  const [animationLength, setAnimationLength] = useState(0);
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  const currentProjectFormattedForModal = (projectIndex) => {
    if (!projects) return;
    
    return {
        ...projects[projectIndex],
        ANDis: shuffleAndSliceArray(projects[projectIndex].andis, 8),
        techStack: shuffleAndSliceArray(projects[projectIndex].techstack, 5)
    } 
  }
  
  const boxClick = id => {
    setCurrentAnimationIndex(id);
    setCurrentProject(currentProjectFormattedForModal(id));
    setProjectModalIsActive(true);  
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getProjects();

      if(response.status === 200){
        setProjects(response.projects);
        setCurrentProject(currentProjectFormattedForModal(0));
        setAnimationLength(response.projects.length);       
      } else {
        setError(response.message);
      }
    };

    if (projects === undefined) {
      fetchProjects();
    }
  }, [projects]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (!isAnimating) return;

      if (currentAnimationIndex === (animationLength * 2)) {
        setCurrentAnimationIndex(0);
        return;
      }

      const shouldDisplayModal = currentAnimationIndex % 2 === 0;

      setProjectModalIsActive(shouldDisplayModal);
      setCurrentAnimationIndex(currentAnimationIndex + 1);
      setCurrentModalIndex(shouldDisplayModal ? currentAnimationIndex / 2 : currentModalIndex);   
      
      setCurrentProject(currentProjectFormattedForModal(currentModalIndex));

    }, INTERVAL_TIME);

    const handleKeyDown = (e) => {      
      if (e.keyCode === SPACE_BAR_KEY_CODE) {
        setProjectModalIsActive(true);
        setIsAnimtating(true);

        setCurrentProject(currentProjectFormattedForModal(currentModalIndex));
      }

      if (e.keyCode === ESCAPE_KEY_CODE) {
        setProjectModalIsActive(false);
        clearInterval(animationInterval);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(animationInterval);
    };
  }, [currentAnimationIndex, isAnimating, animationLength, projectModalIsActive, currentModalIndex]);

  return (
    error ? (<ErrorWrapper >{error}</ErrorWrapper>) :
    <HomepageWrapper>
      {
        ((projectModalIsActive && projects && projects.length > 0) && (
          <ProjectModal 
            project={currentProject}
            onClick={() => {setProjectModalIsActive(false)}}/> 
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
