import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onInputChange } from '../../global/helpers';
import { 
  Label, 
  SubmitButton,
  FormInput,
  FormWrapper
} from './styles';

const ClientAndStackForm = ({ name, isClient }) => {
  const [imageUrl, setImageUrl] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
  <>
    <FormWrapper onSubmit={handleSubmit}>
      <Label>{name}</Label>
      <div>
        <Label>{isClient ? 'Client' : 'Tech Stack'} Image Url</Label>
        <FormInput placeholder={isClient ? 'Client image url' : 'Tech Stack image url'} value={imageUrl} onChange={onInputChange(setImageUrl)} />
      </div>
      <div>
        <SubmitButton type='submit'>SUBMIT</SubmitButton>
      </div>
    </FormWrapper>
  </>
  )};

  ClientAndStackForm.propTypes = {
  name: PropTypes.string.isRequired,
  isClient: PropTypes.bool
};

ClientAndStackForm.defaultProps = {
  isClient: false
};

export default ClientAndStackForm;
