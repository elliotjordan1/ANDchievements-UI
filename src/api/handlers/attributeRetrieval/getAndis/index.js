import makeGetRequest from '../../../requests/getRequest/getRequest';

export default async () => {
  const response = await makeGetRequest('/andis/get');

  const { status, data, statusText } = response;

  if (response.status !== 200) {
    const fail = {
      status,
      message: statusText
    };

    return(fail);
  } 

  const success = {
    status,
    andis: data.andis
  }

  return(success);
};
