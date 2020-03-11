import Axios from 'axios';
import { API_URL,  AUTHENTICATION_TOKEN } from 'react-native-dotenv';

export default async (endpoint, content) => {
  const options = {
    method : 'POST',
    headers: {
      'x-api-key': AUTHENTICATION_TOKEN,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(content),
    url: `${API_URL}${endpoint}`
  }

  try {
    return await Axios(options);
  } catch (error) {
    return {
      status: 500,
      statusText: 'Unable to connect to server'
    }
  }
}