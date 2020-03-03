import React, { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { FormWrapper, HomepageWrapper } from '../../global/styles';
import * as AttributeTypes from '../../global/constants';
import { FormTitle, FormBody, Label, FormInput, TextArea, InputContainer, SubmitButton } from './styles';
import FormModal from '../FormModal/FormModal';
import AttributeForm from '../AttributeForm/AttributeForm';

const ProjectForm = () => { 
  const [viewModal, setViewModal] = useState(false);
  const [formType, setFormType] = useState();
  const [formTitle, setFormTitle] = useState();

  const setToANDi = () => {
    setFormType(<AttributeForm formType = {AttributeTypes.ANDi} />); 
    setFormTitle('Add an ANDi')
    setViewModal(true); 
  };

  const setToTechStack = () => {
    setFormType(<AttributeForm formType = {AttributeTypes.TechStack} />); 
    setFormTitle('Add a Tech Stack')
    setViewModal(true); 
  };

  const setToClient = () => {
    setFormType(<AttributeForm formType = {AttributeTypes.Client} />); 
    setFormTitle('Add a Client')
    setViewModal(true); 
  };
  
  return (
  <ToastProvider>
    <HomepageWrapper>
      <FormWrapper >
        <FormTitle>Add a Project</FormTitle>
        <FormBody>
          <div>
            <Label>Project Title</Label>
            <FormInput maxLength={20} placeholder='Project title' />
          </div>
          <div>
            <Label onClick={() => {setToClient()}}>Client</Label>
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
            <Label onClick={() => {setToTechStack()}}>Tech Stacks</Label>
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
              close={() => {setViewModal(false)}}
            /> 
          ))
          }
    </HomepageWrapper>
  </ToastProvider>
)};

export default ProjectForm;



