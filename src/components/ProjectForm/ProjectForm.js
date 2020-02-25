import React, { useState } from 'react';
import { FormWrapper, HomepageWrapper } from '../../global/styles';
import { FormTitle, FormBody, Label, FormInput, TextArea, InputContainer, SubmitButton } from './styles';
import FormModal from '../FormModal/FormModal';
import ANDIForm from '../ANDIForm/ANDIForm';

const ProjectForm = () => { 
  const [viewModal, setViewModal] = useState(false);
  const [formType, setFormType] = useState();
  const [formTitle, setFormTitle] = useState();

  const setToANDi = () => {
    setFormType(<ANDIForm />); 
    setFormTitle('Add an ANDi')
    setViewModal(true); 
  };
  
  return (
  <HomepageWrapper>
    <FormWrapper >
      <FormTitle>Add a Project</FormTitle>
      <FormBody>
        <div>
          <Label>Project Title</Label>
          <FormInput maxLength={20} placeholder='Project title' />
        </div>
        <div>
          <Label>Client</Label>
          <FormInput placeholder='Select client' />
        </div>
        <div>
          <Label>Project Description</Label>
          <InputContainer>
            <TextArea maxLength={60} placeholder='Client description' />
            <TextArea maxLength={60} placeholder='Project description' />
            <TextArea maxLength={60} placeholder='Project outcomes' />
          </InputContainer>
        </div>
        <div>
          <Label>Cover Image</Label>
          <FormInput placeholder='Cover image url' />
        </div>
        <div>
          <Label onClick={() => {setToANDi()}} >ANDis</Label>
          <FormInput placeholder='Select ANDis' />
        </div>
        <div>
          <Label>Tech Stack</Label>
          <FormInput placeholder='Select Tech Stack' />
        </div>
        <div>
          <SubmitButton onClick={() => {}} >SUBMIT</SubmitButton>
        </div>
      </FormBody>
    </FormWrapper>
    {
        (viewModal && (
          <FormModal 
            title={formTitle}
            form={formType}
          /> 
        ))
        }
  </HomepageWrapper>
)};

export default ProjectForm;



