/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import getAllProjects from '../api/handlers/getprojects/getProjects';
import { HomepageWrapper, ErrorWrapper } from '../global/styles';
import { shuffleAndSliceArray } from '../global/helpers';

const SPACE_BAR_KEY_CODE = 32;
const ESCAPE_KEY_CODE = 27;
const INTERVAL_TIME = 10000;

const Homepage = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [projectModalIsActive, setProjectModalIsActive] = useState(false);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimtating] = useState(false);
  const [animationLength, setAnimationLength] = useState(0);
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  const boxClick = id => {
    setCurrentAnimationIndex(id);
    setProjectModalIsActive(true);  
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();

      if(response.status === 200){
        setProjects(response.projects);

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
    }, INTERVAL_TIME);

    const handleKeyDown = (e) => {      
      if (e.keyCode === SPACE_BAR_KEY_CODE) {
        setProjectModalIsActive(true);
        setIsAnimtating(true);
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
        ((projectModalIsActive && projects && projects.length > 0) && 
        (
          <ProjectModal 
          image={projects[currentModalIndex].imageurl} 
          name={projects[currentModalIndex].name} 
          client={projects[currentModalIndex].client} 
          blurbOne={projects[currentModalIndex].blurb_one}
          blurbTwo={projects[currentModalIndex].blurb_two}
          blurbThree={projects[currentModalIndex].blurb_three} 
          ANDis={shuffleAndSliceArray(projects[currentModalIndex].andis, 8)} 
          techStack={shuffleAndSliceArray(projects[currentModalIndex].techstack, 5)} 
          logo={projects[currentModalIndex].clientlogourl}
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
