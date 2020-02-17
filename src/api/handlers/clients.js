import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : 'YsO9MGt0DwUu2PDTQ4y4TrhRtnJlYFzYWa1NW92PmvDFqcyDGLiacSNDWape'
  }
};

const getAllClients = async () => {
  const response = await Axios.get('https://658m0jk5l3.execute-api.us-east-1.amazonaws.com/prod/clients/get', options);
  return response;
};

export default getAllClients;