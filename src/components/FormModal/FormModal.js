/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Background, 
  ModalBody,
  FormTitle
} from './styles';

const FormModal = ({ title, form }) => {
  return (
    <>
    <Background >
      <ModalBody >
        <FormTitle>{title}</FormTitle>
        {form}
      </ModalBody>
    </Background>
    </>
  );
};

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired
};

export default FormModal;
