/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { onInputChange } from '../../global/helpers';
import { SubmitButton, Label, FormInput, FormWrapper } from './AttributeFormStyles.js';
import ANDiCreator from '../../api/handlers/attributeCreation/andi';
import TechStackCreator from '../../api/handlers/attributeCreation/techStack';
import ClientCreator from '../../api/handlers/attributeCreation/client';

const AttributeForm = ({
  formType
}) => {
  const { addToast, removeAllToasts } = useToasts();

  const creationStrategies = [
    new ANDiCreator(),
    new TechStackCreator(),
    new ClientCreator()
  ];

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    creationStrategies.forEach(async (strategy) => {
      if (strategy.appliesTo(formType)) {
        const response = await strategy.create({
          name,
          imageUrl
        });     

        if (response.status === 201) {
          addToast(`Success! ${name} has been added, with ImageURL: ${imageUrl}`, { appearance: 'success' });          
        } else {
          addToast('Uh oh! Something went wrong!', { appearance: 'error' });
        }
      }      
    });

    setTimeout(() => {
      removeAllToasts();
    }, 3000);    
  };

  const nameLabel = `${formType  } Name`;
  const imageUrlLabel = `${formType  } Image URL`;

  return (
    <>
      <FormWrapper onSubmit = {handleSubmit}>
        <div>
          <Label>{nameLabel}</Label>
          <FormInput maxLength = {40} placeholder = {nameLabel} value = {name} onChange={onInputChange(setName)} />
        </div>
        <div>
          <Label>{imageUrlLabel}</Label>
          <FormInput maxLength = {40} placeholder = {imageUrlLabel} value = {imageUrl} onChange={onInputChange(setImageUrl)} />
        </div>
        <div>
          <SubmitButton type = 'submit'>SUBMIT</SubmitButton>
        </div>
      </FormWrapper>
    </>
  )
}

AttributeForm.propTypes = {
  formType: PropTypes.string.isRequired
}

export default AttributeForm;