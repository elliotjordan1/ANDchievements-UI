import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : process.env.AUTHENTICATION_TOKEN
  }
};

const getAllProjects = async () => {
  const response = await Axios.get('https://658m0jk5l3.execute-api.us-east-1.amazonaws.com/prod/projects/get', options);
  return response;
};

export default getAllProjects;