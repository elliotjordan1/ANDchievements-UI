import makeGetRequest from '../../../requests/getRequest/getRequest';

const getAllProjects = async () => {
  const response = await makeGetRequest('/projects/get');
  if (response.status === 200) {
    return({status: response.status, projects: response.data.projects});
  } 

  return({status: response.status, message: response.statusText});
};

export default getAllProjects;