import makePostRequest from '../../requests/postRequest/postRequest';

const createANDi = async (data) => {
  const response = await makePostRequest('/andis/create', data);
  if (response.status === 200) {
    return({status: response.status, data: response.data});
  } 

  return({status: response.status, message: response.statusText});
};

export default createANDi;