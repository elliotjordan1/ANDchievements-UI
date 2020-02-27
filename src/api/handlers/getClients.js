import Axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'x-api-key' : 'YsO9MGt0DwUu2PDTQ4y4TrhRtnJlYFzYWa1NW92PmvDFqcyDGLiacSNDWape'
  }
};

const getAllClients = async () => {
  const response = await Axios.get('https://gw31ij3mf5.execute-api.us-east-1.amazonaws.com/prod/clients/get', options);
  return response;
};

export default getAllClients;