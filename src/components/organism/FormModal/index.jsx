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

const FormModal = ({ title, form, close, open }) => {
  return (
    <>
    <Background open={open}>
      <ModalBody >
        <FormTitle>
          {title} 
          <CloseIcon onClick={() => {close()}} data-testid="close-icon-test"> 
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
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default FormModal;
