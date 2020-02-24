import React from 'react';
import { FormWrapper, HomepageWrapper } from '../../global/styles';
import { FormTitle, FormBody, Label, FormInput, TextArea, InputContainer, SubmitButton } from './styles';

const ProjectForm = () => (
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
          <Label>ANDis</Label>
          <FormInput placeholder='Select ANDis' />
        </div>
        <div>
          <Label>Tech Stack</Label>
          <FormInput placeholder='Select Tech Stack' />
        </div>
        <div>
          <SubmitButton >SUBMIT</SubmitButton>
        </div>
      </FormBody>
    </FormWrapper>
  </HomepageWrapper>
);

export default ProjectForm;



