import makeGetRequest from '../../../requests/getRequest';

export default async () => {
  const response = await makeGetRequest('/clients/get');

  const { status, data } = response;

  if (response.status !== 200) {
    const fail = {
      status,
      message: 'Failed to retrieve Clients'
    }

    return(fail);
  } 

  const success = {
    status,
    clients: data.clients
  }

  return(success);
};