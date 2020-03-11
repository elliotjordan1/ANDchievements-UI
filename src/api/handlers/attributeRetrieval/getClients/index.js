import makeGetRequest from '../../../requests/getRequest/getRequest';

export default async () => {
  const response = await makeGetRequest('/clients/get');

  const { status, data, statusText } = response;

  if (response.status !== 200) {
    const fail = {
      status,
      message: statusText
    }

    return(fail);
  } 

  const success = {
    status,
    clients: data.clients
  }

  return(success);
};