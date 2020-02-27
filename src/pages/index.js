/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import HomepageWrapper from '../global/styles';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import getAllProjects from '../api/handlers/projects';
import { shuffleAndSliceArray } from '../global/helpers';
const SPACE_BAR_KEY_CODE = 32;
const INTERVAL_TIME = 45000;
const TIMEOUT_INTERVAL = 40000;

const Homepage = () => {
  const [modal, setModal] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [animationLength, setAnimationLength] = useState(0);
  const [projects, setProjects] = useState(undefined);

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
      setProjects(response.data.projects);
      setAnimationLength(response.data.projects.length);
    };

    if (projects === undefined) {
      fetchProjects();
    }
  });

  useEffect(() => {
    const handleSpace = (e) => {      
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
    };

    window.addEventListener('keydown', handleSpace);

    return () => {
      window.removeEventListener('keydown', handleSpace);
    };
  }, []);
  
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
