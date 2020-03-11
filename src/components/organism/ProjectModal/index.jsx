/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Background, 
  ModalWrapper, 
  HeadingText, 
  ProjectBody, 
  BodyText, 
  StackedList, 
  LogoWrapper, 
  Image
} from './styles';

import { TechListContainer } from '../../atom';
import { ANDiListItem, TechListItem } from '../../molecule';

const ProjectModal = ({project, onClick}) => {
  const { imageurl, name, client, blurb_one, blurb_two, blurb_three, andis, techstack, clientlogourl } = project;

  const andiListComponent = andis && andis.map((item) => {
    const andi = JSON.parse(item);

     return (<ANDiListItem andi={andi} />);
    });

  const techStackComponent = techstack && techstack.map((item) => {
    const tech = JSON.parse(item);

    return (
      <TechListItem tech = {tech} />);
  });

  return (
    <Background onClick={onClick}>
      <ModalWrapper onClick={onClick}>
        <Image image={imageurl}>
          <LogoWrapper image={clientlogourl}/>
        </Image>
          <ProjectBody>
            <HeadingText><em>{client}</em><br />{name}</HeadingText>
            <BodyText>{blurb_one}</BodyText>
            {blurb_two ? <BodyText>{blurb_two}</BodyText> : null}
            {blurb_three ? <BodyText>{blurb_three}</BodyText> : null}
            <BodyText><b>ANDis</b> <br /></BodyText>
            <StackedList>
              {andiListComponent}
            </StackedList>
            <TechListContainer>
              {techStackComponent}
            </TechListContainer>
          </ProjectBody>
      </ModalWrapper>
    </Background>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.objectOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProjectModal;
