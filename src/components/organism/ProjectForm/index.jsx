import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { Formik } from 'formik';
import {
  FormInput,
  FormLabel,
  FormTitle,
  FormBody,
  FormSpinner,
  SubmitButton,
  FormSelect,
  SpinnerContainer,
  InputContainer,
  HomepageWrapper,
  FormWrapper,
  ErrorText
} from '../../atom';
import {
  MultiSelect,
  ProjectDescriptionInputs
} from '../../molecule';
import * as AttributeTypes from '../../../global/constants';
import { getClients , getAndis, getTechnologies } from '../../../global/dropdownFormatters';
import AttributeForm from '../AttributeForm';
import { ProjectPostFormatter } from '../../../global/postFormatters';
import { createProject } from '../../../api/handlers/attributeCreation';
import theme from '../../../global/theme';


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

export const addNewClient = (newClient, { setFieldValue }) => {
  setFieldValue('clientId', newClient.new_client[0].clientid);
  setFieldValue('clientName', newClient.new_client[0].name);
}

export const submitForm = async (values, { setSubmitting, addToast }) => {
  setSubmitting(true);
  const formattedValues = ProjectPostFormatter(values);
  
  const response = await createProject(formattedValues);

  const {
    projectName
  } = formattedValues;

  if (response.status === 201) {
    addToast(`Success! ${projectName} has been added!`, { appearance: 'success' });   
  } else {
    addToast(`Failed to add project ${projectName}!`, { appearance: 'error' });  
  }
}

const ProjectForm = ({ defaultValues }) => { 
  const [clientOptions, setClientOptions] = useState(undefined);

  const [andiOptions, setAndiOptions] = useState(undefined);
  const [filteredAndiOptions, setFilteredAndiOptions] = useState(undefined);

  const [techStackOptions, setTechStackOptions] = useState(undefined);
  const [filteredTechStackOptions, setFilteredTechStackOptions] = useState(undefined);

  const [addingTechStack, setAddingTechStack] = useState(false);
  const [addingANDi, setAddingANDi] = useState(false);
  const [addingClient, setAddingClient] = useState(false);

  const { addToast } = useToasts();  

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
    clientId: defaultValues.clientId,
    clientName: defaultValues.clientName,
    clientDescription: '',
    projectDescription: '',
    projectOutcomes: '',
    coverImageUrl: '',
    projectAndis: [...defaultValues.projectAndis],
    projectTech: [...defaultValues.projectTech],
    currentAndiName: '',
    currentTechName: ''
  };

  return (
      <HomepageWrapper>
        <Formik
          initialValues = {formInitialValues}
          validate={values => formValidator(values)}
          onSubmit={(values,  { setSubmitting }) => submitForm(values, { setSubmitting, addToast } )}>
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
                  <FormTitle>Add a Project</FormTitle>
                    <FormBody>
                      {(andiOptions === undefined || techStackOptions === undefined || clientOptions ===undefined) ? (
                        <SpinnerContainer>
                          <FormSpinner
                            size={200}
                            color={theme.colours.brand.red}
                            loading
                          />
                        </SpinnerContainer>
                      ) : (
                        <>
                          <div> 
                            {errors.projectTitle && touched.projectTitle ? (
                              <ErrorText>
                                Project Title - Required
                              </ErrorText>
                            ) : (
                              <FormLabel>
                                Project Title
                              </FormLabel>
                            )}                        
                            <FormInput 
                              type="text"
                              name="projectTitle"
                              maxLength={20} 
                              placeholder='Project title' 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.projectTitle}  
                            />
                          </div>
                          <div>
                            {errors.clientName && touched.clientName ? (
                              <ErrorText>
                                Client - Required
                              </ErrorText>
                            ) : (
                              <FormLabel onClick={() => {setAddingClient(!addingClient)}}>
                                Client
                              </FormLabel>
                            )}  
                            <FormSelect 
                              placeholder='Select client' 
                              maxLength = {40} 
                              data-testid='select-client-test'
                              options = {clientOptions} 
                              onChange={(e) => addNewClient(e, { setFieldValue })}
                              onBlur={handleBlur}>
                              {values.clientName}
                            </FormSelect>
                          </div>
                          <div hidden={!addingClient}>
                            <AttributeForm formType = {AttributeTypes.Client} onAdd={(e) => addNewClient(e, { setFieldValue })} />
                          </div>
                          <div>
                            {errors.projectDescription && (touched.projectDescription && 
                              touched.projectOutcomes && 
                              touched.clientDescription) ? (
                              <ErrorText>
                                Project Description - Required
                              </ErrorText>
                            ) : (
                              <FormLabel>
                                Project Description
                              </FormLabel>
                            )}  
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
                          </div>
                          <div>
                            {errors.coverImageUrl && touched.coverImageUrl ? (
                              <ErrorText>
                                Cover Image - Required
                              </ErrorText>
                            ) : (
                              <FormLabel>
                                Cover Image
                              </FormLabel>
                            )}  
                            <FormInput 
                              type='text'
                              name='coverImageUrl'
                              maxLength={200}
                              placeholder = 'Cover Image URL'
                              onChange={handleChange}
                              onblur={handleBlur}
                              value={values.coverImageUrl}
                            />
                          </div>
                          <div>
                            {errors.projectAndis && touched.projectAndis ? (
                              <ErrorText>
                                ANDis - Required
                              </ErrorText>
                            ) : (
                              <FormLabel onClick={() => {setAddingANDi(!addingANDi)}}>
                                ANDis
                              </FormLabel>
                            )}  
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
                          </div>
                          <div hidden={!addingANDi}>
                            <AttributeForm formType = {AttributeTypes.ANDi} onAdd={newItem => { 
                                const newEntry = {
                                  id: newItem.new_andi[0].andiid,
                                  name: newItem.new_andi[0].name
                                }
                                const newArrayFieldValue = [...values.projectAndis, newEntry];

                                setFieldValue('projectAndis', newArrayFieldValue);
                              }} />
                          </div>
                          <div>
                            {errors.projectTech && touched.projectTech ? (
                              <ErrorText>
                                Tech Stacks - Required
                              </ErrorText>
                            ) : (
                              <FormLabel onClick={() => {setAddingTechStack(!addingTechStack)}}>
                                Tech Stacks
                              </FormLabel>
                            )}  
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
                          </div>
                          <div hidden={!addingTechStack}>
                            <AttributeForm formType = {AttributeTypes.TechStack} onAdd={newItem => { 
                                const newEntry = {
                                  id: newItem.new_tech[0].technologyid,
                                  name: newItem.new_tech[0].name
                                }
                                const newArrayFieldValue = [...values.projectTech, newEntry];

                                setFieldValue('projectTech', newArrayFieldValue);
                              }} />
                          </div>
                          <div>
                            <SubmitButton type="submit" text="CREATE" disabled={isSubmitting}/>
                          </div>
                        </>
                      )}
                    </FormBody>
                  </FormWrapper>
              </>
            );
          }}
        </Formik>
      </HomepageWrapper>
)};

ProjectForm.propTypes = {
  defaultValues: PropTypes.objectOf(PropTypes.any)
}

ProjectForm.defaultProps = {
  defaultValues: {
    clientId: '',
    clientName: '',
    projectAndis: [],
    projectTech: []
  }
}

export default ProjectForm;
