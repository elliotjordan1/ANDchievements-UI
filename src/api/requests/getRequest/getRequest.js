import Axios from 'axios';
import { API_URL, AUTHENTICATION_TOKEN } from 'react-native-dotenv';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : AUTHENTICATION_TOKEN
  }
};

const makeGetRequest = async (endpoint) => {
  try {
    return await Axios.get(`${API_URL}${endpoint}`, options);
  } catch (error) {
    if (!error.response) {
      return {
        status: 500,
        statusText: 'Unable to connect to server'
      }
    }
    
    return error.response;
  }
}

export default makeGetRequest;