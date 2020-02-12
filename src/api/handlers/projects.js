import Axios from 'axios';

const getAllProjects = async () => {
  const response = await Axios.get('https://658m0jk5l3.execute-api.us-east-1.amazonaws.com/prod/projects/get');
  return response;
};

export default getAllProjects;