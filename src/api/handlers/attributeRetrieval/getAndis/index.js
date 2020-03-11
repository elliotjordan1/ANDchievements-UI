import makeGetRequest from '../../../requests/getRequest';

export default async () => {
  const response = await makeGetRequest('/andis/get');

  const { status, data } = response;

  if (response.status !== 200) {
    const fail = {
      status,
      message: 'Failed to retrieve ANDis'
    };

    return(fail);
  } 

  const success = {
    status,
    andis: data.andis
  }

  return(success);
};
