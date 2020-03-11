import Axios from 'axios';
import { API_URL,  AUTHENTICATION_TOKEN } from 'react-native-dotenv';

const createOptions = (endpoint, content) => {
  const url = `${API_URL}${endpoint}`;
  const jsonContent = JSON.stringify(content);

  return (
  { 
    method: 'POST',
    headers: {
      'x-api-key' : AUTHENTICATION_TOKEN,
      'Content-Type' : 'application/json'
    },
    data: jsonContent,
    url
  }
)};

export default async (endpoint, content) => {
  try {
    return await Axios(createOptions(endpoint, content));
  } catch (error) {
    return {
      status: 500,
      statusText: 'Unable to connect to server'
    }
  }
}