import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : 'YsO9MGt0DwUu2PDTQ4y4TrhRtnJlYFzYWa1NW92PmvDFqcyDGLiacSNDWape'
  }
};

const makeGetRequest = async (endpoint) => {
  try {
    return await Axios.get(`${'https://gw31ij3mf5.execute-api.us-east-1.amazonaws.com/prod'}${endpoint}`, options);
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