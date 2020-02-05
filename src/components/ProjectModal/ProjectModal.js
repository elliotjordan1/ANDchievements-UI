import React from 'react';
import PropTypes from 'prop-types';
import { Background, ModalWrapper, HeadingText, ProjectBody, BodyText, ListItem, StackedList, ListWrapper, LogoWrapper } from './styles';
import { TextWrapper } from '../../global/styles';

const ProjectModal = ({ image, onClick, name, client, blurb, ANDis, techStack, logo }) => {
  return (
    <>
    <Background onClick={onClick}>
      <ModalWrapper image={image} onClick={onClick}>
        <LogoWrapper image={logo}/>
        <TextWrapper>
          <HeadingText><em>{client}</em><br />{name}</HeadingText>
          <ProjectBody>
            <BodyText>{blurb}</BodyText>
            <ListWrapper>
              <StackedList>
                ANDis <br />
                {ANDis.map((andi) => 
                  <ListItem image={andi.url}>{andi.name}</ListItem>
                )}
              </StackedList>
              <StackedList>
                Tech Stack <br />
                {techStack.map((item) => 
                  <ListItem image={item.url}>{item.name}</ListItem>
                )}
              </StackedList>
            </ListWrapper>
          </ProjectBody>
        </TextWrapper>
      </ModalWrapper>
    </Background>
    </>
  );
};

ProjectModal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  ANDis: PropTypes.shape.isRequired,
  techStack: PropTypes.shape.isRequired,
  logo: PropTypes.string.isRequired
};

export default ProjectModal;
