import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onInputChange } from '../../global/helpers';
import { 
  Label, 
  SubmitButton,
  FormInput,
  FormWrapper
} from './styles';

const ANDIForm = ({ name }) => {
  const [imageUrl, setImageUrl] = useState();
  const [role, setRole] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()
    return role;
  };

  return (
  <>
    <FormWrapper onSubmit={handleSubmit}>
      <Label>{name}</Label>
      <div>
        <Label>ANDi Image Url</Label>
        <FormInput placeholder='ANDi image url' value={imageUrl} onChange={onInputChange(setImageUrl)} />
      </div>
      <div>
        <Label>ANDi Project Role</Label>
        <FormInput maxLength={20} placeholder='Role on the project' value={role} onChange={onInputChange(setRole)}/>
      </div>
      <div>
        <SubmitButton type='submit'>SUBMIT</SubmitButton>
      </div>
    </FormWrapper>
  </>
  )};

ANDIForm.propTypes = {
  name: PropTypes.string.isRequired
};

export default ANDIForm;
