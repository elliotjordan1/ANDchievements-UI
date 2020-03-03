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
const INTERVAL_TIME = 45000;
const TIMEOUT_INTERVAL = 40000;

const Homepage = () => {
  const [modal, setModal] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [animationLength, setAnimationLength] = useState(0);
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  const boxClick = id => {
    setModal(id);
    setViewModal(true);  
  };

  const animate = (start) => {
      let run = start;
      setViewModal(true);
      setModal(run);
      
      setTimeout(() => {
        run +=1;
        if(run === animationLength){
          run = 0;
        }

        setViewModal(false);

      }, TIMEOUT_INTERVAL);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      if(response.status === 200){
        setProjects(response.projects);
        setAnimationLength(response.projects.length);
      }
      else{
        setError(response.message);
      }
    };

    if (projects === undefined) {
      fetchProjects();
    }
  });

  useEffect(() => {
    const handleKeyDown = (e) => {      
      if (e.keyCode === SPACE_BAR_KEY_CODE) {
        let start = 0;

        setViewModal(true);
        setInterval(() => {
          animate(start);
          start +=1;
          if(start === animationLength){
            start = 0;
          }
        }, INTERVAL_TIME);
      }

      if (e.keyCode === ESCAPE_KEY_CODE) {
        setViewModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    error ? (<ErrorWrapper >{error}</ErrorWrapper>) :
    <HomepageWrapper>
      {
        ((viewModal && projects && projects.length > 0) && (
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
