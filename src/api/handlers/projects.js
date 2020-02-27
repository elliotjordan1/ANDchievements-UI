import Axios from 'axios';
import { API_URL, AUTHENTICATION_TOKEN } from 'react-native-dotenv';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : AUTHENTICATION_TOKEN
  }
};

const getAllProjects = async () => {
  const response = await Axios.get(`${API_URL}/projects/get`, options);
  return response;
};

export default getAllProjects;