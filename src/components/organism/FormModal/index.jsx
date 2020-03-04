/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Background, 
  ModalBody,
  FormTitle,
  CloseIcon
} from './styles';
import Icon from '../../../assets/cross';

const FormModal = ({ title, form, close }) => {
  return (
    <>
    <Background >
      <ModalBody >
        <FormTitle>
          {title} 
          <CloseIcon onClick={() => {close()}}> 
            <Icon />
          </CloseIcon>
        </FormTitle>
        {form}
      </ModalBody>
    </Background>
    </>
  );
};

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default FormModal;
