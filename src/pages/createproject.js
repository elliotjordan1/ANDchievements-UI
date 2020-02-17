import React from 'react';
import ProjectForm from '../components/ProjectForm/ProjectForm';
import createProject from '../api/handlers/createprojectAPI';

const createAProject = async () => {
  const response = await createProject();
  console.log(response);
};

createAProject();



export default function CreateProject() {
  return (
      < ProjectForm />
  );
}