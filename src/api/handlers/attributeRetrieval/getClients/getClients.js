import makeGetRequest from '../../../requests/getRequest/getRequest';

const getAllClients = async () => {
  const response = await makeGetRequest('/clients/get');
  if (response.status === 200) {
    return({status: response.status, clients: response.data.clients});
  } 

  return({status: response.status, message: response.statusText});
};

export default getAllClients;