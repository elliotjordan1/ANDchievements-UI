import React, { useState } from 'react';
import PropTypes from 'prop-types';
import createANDi from '../../api/handlers/createANDi/createANDi';
import { onInputChange } from '../../global/helpers';
import { 
  Label, 
  SubmitButton,
  FormInput,
  FormWrapper
} from './styles';

const ANDIForm = ({ close }) => {
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createANDi({data: {'andiFullName': name, 'andiImageUrl': imageUrl}});
    close();
  };

  return (
  <>
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label>ANDi Name</Label>
        <FormInput maxLength={20} placeholder='ANDi Name' value={name} onChange={onInputChange(setName)}/>
      </div>
      <div>
        <Label>ANDi Image Url</Label>
        <FormInput placeholder='ANDi image url' value={imageUrl} onChange={onInputChange(setImageUrl)} />
      </div>
      <div>
        <SubmitButton type='submit'>SUBMIT</SubmitButton>
      </div>
    </FormWrapper>
  </>
  )};

ANDIForm.propTypes = {
  close: PropTypes.func.isRequired
};

export default ANDIForm;
