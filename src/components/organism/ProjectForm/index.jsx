import React, { useState, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import {
  FormInput,
  FormLabel as Label,
  FormTitle,
  FormBody,
  TextArea,
  SubmitButton,
  FormSelect
} from '../../atom';
import {
  MultiSelect
} from '../../molecule';
import { FormWrapper, HomepageWrapper } from '../../../global/styles';
import * as AttributeTypes from '../../../global/constants';
import { getClients } from '../../../global/dropdownFormatters';
import { onInputChange } from '../../../global/helpers';
import { InputContainer } from './styles';
import FormModal from '../FormModal';
import AttributeForm from '../AttributeForm';

const ProjectForm = () => { 
  const [clientOptions, setClientOptions] = useState(undefined);
  const [viewModal, setViewModal] = useState(false);
  const [formType, setFormType] = useState();
  const [formTitle, setFormTitle] = useState();
  const [projectTitle, setProjectTitle] = useState('');
  const [techStack, setTechStack] = useState('');
  const [coverImage, setCoverImage] = useState('');

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

  useEffect(() => {
    const getAllClients = (async () => {
      const formattedClients = await getClients();

      setClientOptions(formattedClients);
    })
    if (clientOptions === undefined) {
      getAllClients();
    }
  });
  
  return (
  <ToastProvider>
    <HomepageWrapper>
      <FormWrapper >
        <FormTitle text = "Add a Project" />
        <FormBody>
          <div>
            <Label labelText ="Project Title" />
            <FormInput value = {projectTitle} maxLength={20} placeholder='Project title' onChange={onInputChange(setProjectTitle)} />
          </div>
          <div>
            <Label onClick={() => {setToClient()}} labelText = "Client" />
            <FormSelect placeholder='Select client' maxLength = {40} options = {clientOptions}/>
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
            <FormInput value={coverImage} placeholder='Cover image url' maxLength={200} onChange={onInputChange(setCoverImage)} />
          </div>
          <div>
            <Label onClick={() => {setToANDi()}} labelText = "ANDis" />
            <MultiSelect placeholder='Select ANDis...' optionList = {[]} />
          </div>
          <div>
            <Label onClick={() => {setToTechStack()}} labelText ="Tech Stacks" />
            <FormInput value={techStack} placeholder='Select Tech Stack' maxLength={40} onChange={onInputChange(setTechStack)} />
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


