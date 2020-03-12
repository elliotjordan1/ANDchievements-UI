import React, { useState, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Formik } from 'formik';
import {
  FormInput,
  FormLabel as Label,
  FormTitle,
  FormBody,
  SubmitButton,
  FormSelect
} from '../../atom';
import {
  MultiSelect
} from '../../molecule';
import { FormWrapper, HomepageWrapper } from '../../../global/styles';
import * as AttributeTypes from '../../../global/constants';
import { getClients , getAndis, getTechnologies } from '../../../global/dropdownFormatters';
import { InputContainer } from './styles';
import AttributeForm from '../AttributeForm';


export const formValidator = (values) => {
  const errors = {};

  if (!values.projectTitle) {
    errors.projectTitle = 'Required';
  }

  if (!values.clientName || !values.clientId) {
    errors.clientName = 'Required';
  }

  if (!values.clientDescription || !values.projectDescription || !values.projectOutcomes) {
    errors.projectDescription = 'Required';
  }

  if (!values.coverImageUrl) {
    errors.coverImageUrl = 'Required';
  }

  if (!values.projectAndis || values.projectAndis.length <= 0) {
    errors.projectAndis = 'Required';
  }

  if (!values.projectTech || values.projectTech.length <= 0) {
    errors.projectTech = 'Required';
  }

  return errors;
}

export const filterLists = (listOne, listTwo, filterValue) => {
  return listOne.filter(x => x.label.toLowerCase().includes(filterValue.toLowerCase()))
          .filter(x => !listOne.includes(x.label.toLowerCase()))
          .filter(x => !listTwo.map(pa => pa.id).includes(x.value));
}

const ProjectForm = () => { 
  const [clientOptions, setClientOptions] = useState(undefined);

  const [andiOptions, setAndiOptions] = useState(undefined);
  const [filteredAndiOptions, setFilteredAndiOptions] = useState(undefined);

  const [techStackOptions, setTechStackOptions] = useState(undefined);
  const [filteredTechStackOptions, setFilteredTechStackOptions] = useState(undefined);

  const [addingTechStack, setAddingTechStack] = useState(false);
  const [addingANDi, setAddingANDi] = useState(false);
  const [addingClient, setAddingClient] = useState(false);

  useEffect(() => {
    const getAllAttributes = (async () => {
      const formattedClients = await getClients();
      const formattedANDis = await getAndis();
      const formattedTech = await getTechnologies();

      setClientOptions(formattedClients);
      
      setAndiOptions(formattedANDis);
      setFilteredAndiOptions(formattedANDis);

      setTechStackOptions(formattedTech);
      setFilteredTechStackOptions(formattedTech);
    })
    if (clientOptions === undefined) {
      getAllAttributes();
    }
  });

  const formInitialValues = {
    projectTitle: '',
    clientId: '',
    clientName: '',
    clientDescription: '',
    projectDescription: '',
    projectOutcomes: '',
    coverImageUrl: '',
    projectAndis: [],
    projectTech: [],
    currentAndiName: '',
    currentTechName: ''
  };

  const submitForm = (values, { setSubmitting }) => {
    console.log(values, setSubmitting);
  }

  return (
  <ToastProvider>
    <HomepageWrapper>
      <Formik
        initialValues = {formInitialValues}
        validate={values => formValidator(values)}
        onSubmit={(values, { setSubmitting}) => submitForm(values, setSubmitting)}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => {
          const handleSelect = (newItem, currentFieldValue, arrayFieldValue, existingValues, defaultOptionsList) => {
            const newEntry = {
              id: newItem.value,
              name: newItem.label
            }

            const newArrayFieldValue = [...existingValues, newEntry];

            setFieldValue(arrayFieldValue, newArrayFieldValue);
            setFieldValue(currentFieldValue, '');

            const newListOptions = filterLists(defaultOptionsList, existingValues, currentFieldValue);

            setFilteredAndiOptions(newListOptions);
          }

          const handleAndiChange = (e) => {
            const newAndiOptions = filterLists(andiOptions, values.projectAndis, e.target.value);

            if (e.target.value === '') {
              setFilteredAndiOptions(andiOptions);
            } else {
              setFilteredAndiOptions(newAndiOptions);
            }

            handleChange(e);
          }

          const handleTechStackChange = (e) => {
            const newTechOptions = filterLists(techStackOptions, values.projectTech, e.target.value);

            if (e.target.value === '') {
              setFilteredTechStackOptions(techStackOptions);
            } else {
              setFilteredTechStackOptions(newTechOptions);
            }

            handleChange(e);
          }

          const handleRemove = (id, fieldValue, projectValues) => {
            const newList = projectValues.filter(x => x.id !== id);
            
            setFieldValue(fieldValue, newList);
          }

          return (
            <>
              <FormWrapper onSubmit={handleSubmit}>
                <FormTitle text = "Add a Project" />
                  <FormBody>
                    <div>
                      <Label labelText ="Project Title" />
                      <FormInput 
                        type="text"
                        name="projectTitle"
                        maxLength={20} 
                        placeholder='Project title' 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.projectTitle}  
                      />
                      {errors.projectTitle && touched.projectTitle && errors.projectTitle}
                    </div>
                    <div>
                      <Label onClick={() => {setAddingClient(!addingClient)}} labelText = "Client" />
                      <FormSelect 
                        placeholder='Select client' 
                        maxLength = {40} 
                        data-testid='select-client-test'
                        options = {clientOptions} 
                        onChange={(e) => {
                          setFieldValue('clientId', e.value);
                          setFieldValue('clientName', e.label);             
                        }}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div hidden={!addingClient}>
                      <h3>Add New</h3>
                      <AttributeForm formType = {AttributeTypes.Client} />
                    </div>
                    <div>
                      <Label labelText = "Project Description" />
                      <InputContainer>
                        <FormInput
                          type="text"
                          name="clientDescription"
                          maxLength={60}
                          placeholder='Client Description'
                          hiddenBorder
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.clientDescription}
                        />
                        <FormInput
                          type='text'
                          name='projectDescription'
                          maxLength={60}
                          placeholder='Project Description'
                          hiddenBorder
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.projectDescription}
                        />
                        <FormInput
                          type='text'
                          name='projectOutcomes'
                          maxLength={60}
                          hiddenBorder
                          placeholder='Project Outcomes'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.projectOutcomes}
                        />
                      </InputContainer>
                      {errors.projectDescription && 
                        (touched.projectDescription && 
                        touched.projectOutcomes && 
                        touched.clientDescription) && 
                      errors.projectDescription}
                    </div>
                    <div>
                      <Label labelText = "Cover Image" />
                      <FormInput 
                        type='text'
                        name='coverImageUrl'
                        maxLength={200}
                        placeholder = 'Cover Image URL'
                        onChange={handleChange}
                        onblur={handleBlur}
                        value={values.coverImageUrl}
                      />
                      {errors.coverImageUrl && touched.coverImageUrl && errors.coverImageUrl}
                    </div>
                    <div>
                      <Label onClick={() => {setAddingANDi(!addingANDi)}} labelText = "ANDis" />
                      { andiOptions && filteredAndiOptions && (
                        <MultiSelect 
                          placeholder='Select ANDis...' 
                          name='currentAndiName'
                          optionList = {filteredAndiOptions} 
                          visible={values.currentAndiName !== ''}
                          selectedValues={values.projectAndis}
                          onRemove={e => handleRemove(e.id, 'projectAndis', values.projectAndis)}
                          onSelect={e => handleSelect(e, 'currentAndiName', 'projectAndis', values.projectAndis, andiOptions)}
                          onChange={e => handleAndiChange(e)}
                          value={values.currentAndiName}
                        />
                      )}
                      {errors.projectAndis && touched.currentAndiName && errors.projectAndis}
                    </div>
                    <div hidden={!addingANDi}>
                      <h3>Add New</h3>
                      <AttributeForm formType = {AttributeTypes.ANDi} />
                    </div>
                    <div>
                      <Label onClick={() => {setAddingTechStack(!addingTechStack)}} labelText ="Tech Stacks" />
                      { techStackOptions && filteredTechStackOptions && (
                        <MultiSelect 
                          placeholder='Select Tech Stacks...' 
                          name='currentTechName'
                          optionList = {filteredTechStackOptions} 
                          visible={values.currentTechName !== ''}
                          selectedValues={values.projectTech}
                          onRemove={e => handleRemove(e.id, 'projectTech', values.projectTech)}
                          onSelect={e => handleSelect(e, 'currentTechName', 'projectTech', values.projectTech, techStackOptions)}
                          onChange={e => handleTechStackChange(e)}
                          value={values.currentTechName}
                        />
                      )}
                      {errors.projectTech && touched.currentTechName && errors.projectTech}
                    </div>
                    <div hidden={!addingTechStack}>
                      <h3>Add New</h3>
                      <AttributeForm formType = {AttributeTypes.TechStack} />
                    </div>
                    <div>
                      <SubmitButton type="submit" text="CREATE" disabled={isSubmitting}/>
                    </div>
                  </FormBody>
                </FormWrapper>
            </>
          );
        }}
      </Formik>
    </HomepageWrapper>
  </ToastProvider>
)};

export default ProjectForm;



