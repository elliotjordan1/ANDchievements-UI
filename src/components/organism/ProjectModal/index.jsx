/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { 
  Background, 
  Wrapper, 
  HeadingText, 
  Body, 
  BodyText, 
  LogoWrapper, 
  Image
} from '../../atom/ProjectModal';

import { TechListContainer, ANDiListContainer } from '../../atom';
import { ANDiListItem, TechListItem } from '../../molecule';

const ProjectModal = ({project, onClick}) => {
  const { imageurl, name, client, blurb_one, blurb_two, blurb_three, andis, techstack, clientlogourl } = project;

  return (
    <Background onClick={onClick}>
      <Wrapper>
        <Image image={imageurl}>
          <LogoWrapper image={clientlogourl}/>
        </Image>
          <Body>
            <HeadingText><em>{client}</em><br />{name}</HeadingText>
            <BodyText>{blurb_one}</BodyText>
            {blurb_two ? <BodyText>{blurb_two}</BodyText> : null}
            {blurb_three ? <BodyText>{blurb_three}</BodyText> : null}
            <BodyText><b>ANDis</b> <br /></BodyText>
            <ANDiListContainer>
              {andis && andis.map((item) => {
                let andi;

                try {
                  andi = JSON.parse(item);
                } catch {
                  andi = item;
                }

                return (<ANDiListItem andi={andi} key={andi.andiid} />); 
              })}
            </ANDiListContainer>
            <TechListContainer>
              {techstack && techstack.map((item) => {
                let tech;

                try {
                  tech = JSON.parse(item);
                } catch {
                  tech = item;
                }

                return (
                  <TechListItem tech = {tech} key = {tech.technologyid}/>);
              })}
            </TechListContainer>
          </Body>
      </Wrapper>
    </Background>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.objectOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProjectModal;
