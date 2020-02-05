import React from 'react';
import PropTypes from 'prop-types';
import { Background, ModalWrapper} from './styles';

const ProjectModal = ({ image, onClick }) => {
  return (
    <>
    <Background onClick={onClick}>
      <ModalWrapper image={image} onClick={onClick}/>
    </Background>
    </>
  );
};

ProjectModal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProjectModal;
