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
                {ANDis && ANDis.map((item) => {
                    let andi;
                    try {
                      andi = JSON.parse(item);                    
                    } catch {
                      andi = item;
                    }

                    return (<ListItem key={andi.andiId} image={andi.imageURL}>{andi.name}</ListItem>);
                  }
                  )}
              </StackedList>
              <StackedList>
                Tech Stack <br />
                {techStack && techStack.map((item) => {
                    let tech;
                    try {
                      tech = JSON.parse(item);
                    } catch {
                      tech = item;
                    }
                    
                    return (<ListItem key={tech.technologyId} image={tech.imageURL}>{tech.name}</ListItem>);
                }
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
  ANDis: PropTypes.arrayOf(PropTypes.object).isRequired,
  techStack: PropTypes.arrayOf(PropTypes.object).isRequired,
  logo: PropTypes.string.isRequired
};

export default ProjectModal;
