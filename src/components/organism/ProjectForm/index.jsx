import React, { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import {
  FormInput,
  FormLabel as Label,
  FormTitle,
  FormBody,
  TextArea,
  SubmitButton
} from '../../atom';
import {
  MultiSelect
} from '../../molecule';
import { FormWrapper, HomepageWrapper } from '../../../global/styles';
import * as AttributeTypes from '../../../global/constants';
import { InputContainer } from './styles';
import FormModal from '../FormModal';
import AttributeForm from '../AttributeForm';

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
        <FormTitle text = "Add a Project" />
        <FormBody>
          <div>
            <Label labelText ="Project Title" />
            <FormInput maxLength={20} placeholder='Project title' />
          </div>
          <div>
            <Label onClick={() => {setToClient()}} labelText = "Client" />
            <FormInput placeholder='Select client' maxLength = {40} />
          </div>
          <div>
            <Label labelText = "Project Description" />
            <InputContainer>
              <TextArea maxLength={60} placeholder='Client description' />
              <TextArea maxLength={60} placeholder='Project description' />
              <TextArea maxLength={60} placeholder='Project outcomes' />
            </InputContainer>
          </div>
          <div>
            <Label labelText = "Cover Image" />
            <FormInput placeholder='Cover image url' maxLength={200}/>
          </div>
          <div>
            <Label onClick={() => {setToANDi()}} labelText = "ANDis" />
            <MultiSelect placeholder='Select ANDis...' />
          </div>
          <div>
            <Label onClick={() => {setToTechStack()}} labelText ="Tech Stacks" />
            <FormInput placeholder='Select Tech Stack' maxLength={40} />
          </div>
          <div>
            <SubmitButton text="SUBMIT" />
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



