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
import { getClients } from '../../../global/dropdownFormatters';
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
  if (!values.andiIds || !values.andiNames) {
    errors.andiNames = 'Required';
  }
  if (!values.techStackIds || !values.techStackNames) {
    errors.techStackNames = 'Required';
  }

  return errors;
}

const ProjectForm = () => { 
  const [clientOptions, setClientOptions] = useState(undefined);
  const [addingTechStack, setAddingTechStack] = useState(false);
  const [addingANDi, setAddingANDi] = useState(false);
  const [addingClient, setAddingClient] = useState(false);

  useEffect(() => {
    const getAllClients = (async () => {
      const formattedClients = await getClients();

      setClientOptions(formattedClients);
    })
    if (clientOptions === undefined) {
      getAllClients();
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
    andiIds: [],
    andiNames: [],
    techStackIds: [],
    techStackNames: []
  };

  const submitForm = (values, { setSubmitting}) => {
    setSubmitting(true);
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
          isSubmitting
        }) => (
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
                    <FormSelect placeholder='Select client' maxLength = {40} options = {clientOptions}/>
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
                    <MultiSelect placeholder='Select ANDis...' optionList = {[]} />
                  </div>
                  <div hidden={!addingANDi}>
                    <h3>Add New</h3>
                    <AttributeForm formType = {AttributeTypes.ANDi} />
                  </div>
                  <div>
                    <Label onClick={() => {setAddingTechStack(!addingTechStack)}} labelText ="Tech Stacks" />
                    <FormInput 
                      type='text'
                      name='techStackNames'
                      maxLength={40}
                      placeholder='Select Tech Stack'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.techStackNames.toString()}
                    />
                    {errors.techStackNames && touched.techStackNames && errors.techStackNames}
                  </div>
                  <div hidden={!addingTechStack}>
                    <h3>Add New</h3>
                    <AttributeForm formType = {AttributeTypes.TechStack} />
                  </div>
                  <div>
                    <SubmitButton text="CREATE" disabled={isSubmitting}/>
                  </div>
                </FormBody>
              </FormWrapper>
          </>
        )}
      </Formik>
    </HomepageWrapper>
  </ToastProvider>
)};

export default ProjectForm;



