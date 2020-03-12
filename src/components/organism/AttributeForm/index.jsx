/* eslint-disable import/extensions */
import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import formReducer, { initialFormState } from '../../../reducers/createProject/reducer';
import { onInputChange } from '../../../global/helpers';
import { FormLabel, SubmitButton, FormInput } from '../../atom';
import { createAndi as ANDiCreator, createTechStack as TechStackCreator, createClient as ClientCreator } from '../../../api/handlers/attributeCreation';

const AttributeForm = ({
  formType
}) => {
  const { addToast } = useToasts();  

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');

  const [, dispatch] = useReducer(formReducer, initialFormState);

  const creationStrategies = [
    new ANDiCreator(),
    new TechStackCreator(),
    new ClientCreator()
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    creationStrategies.forEach(async (strategy) => {
      if (strategy.appliesTo(formType)) {
        const response = await strategy.create({
          name,
          imageUrl
        });     

        if (response.status === 201) {
          const { data } = response;

          addToast(`Success! ${name} has been added, with ImageURL: ${imageUrl}`, { appearance: 'success' });   

          dispatch({ type: `ADD_${formType}`, data });       
        } else {
          addToast('Uh oh! Something went wrong!', { appearance: 'error' });
        }
      }      
    });
  };

  const nameLabel = `${formType  } Name`;
  const imageUrlLabel = `${formType  } Image URL`;

  return (
    <div>
      <div>
        <FormLabel labelText={nameLabel} />
        <FormInput maxLength = {40} placeholder = {nameLabel} value = {name} onChange={onInputChange(setName)} />
      </div>
      <div>
        <FormLabel labelText = {imageUrlLabel} />
        <FormInput maxLength = {40} placeholder = {imageUrlLabel} value = {imageUrl} onChange={onInputChange(setImageUrl)} />
      </div>
      <div>
        <SubmitButton type = 'submit' text = {`Create New ${formType}`} onClick={handleSubmit} />
      </div>
    </div>
  )
}

AttributeForm.propTypes = {
  formType: PropTypes.string.isRequired
}

export default AttributeForm;