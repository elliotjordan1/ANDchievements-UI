import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : 'YsO9MGt0DwUu2PDTQ4y4TrhRtnJlYFzYWa1NW92PmvDFqcyDGLiacSNDWape',
    'Content-Type' : 'application/json'
  }
};

const getAllClients = async () => {
  const response = await Axios.get('https://eaiec6cwd2.execute-api.us-east-1.amazonaws.com/dev/clients/get', options);
  return response;
};

export default getAllClients;