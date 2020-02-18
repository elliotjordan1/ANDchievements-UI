import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : process.env.AUTHENTICATION_TOKEN
  }
};

const getAllProjects = async () => {
  const response = await Axios.get(`${process.env.API_URL}/projects/get`, options);
  return response;
};

export default getAllProjects;