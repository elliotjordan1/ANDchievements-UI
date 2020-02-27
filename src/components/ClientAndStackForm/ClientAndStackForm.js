import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onInputChange } from '../../global/helpers';
import { 
  Label, 
  SubmitButton,
  FormInput,
  FormWrapper
} from './styles';

const ClientAndStackForm = ({ isClient, close }) => {
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // HERE - needs to call either createClient or CreateTechStack handlers
    close();
  };

  return (
  <>
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label>{isClient ? 'Client' : 'Tech Stack'} Name</Label>
        <FormInput maxLength={40} placeholder={isClient ? 'Client name' : 'Tech Stack name'} value={name} onChange={onInputChange(setName)} />
      </div>
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
  isClient: PropTypes.bool,
  close: PropTypes.func.isRequired
};

ClientAndStackForm.defaultProps = {
  isClient: false
};

export default ClientAndStackForm;
