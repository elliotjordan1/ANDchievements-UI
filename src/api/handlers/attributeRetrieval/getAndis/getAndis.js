import makeGetRequest from '../../../requests/getRequest/getRequest';

const getAllAndis = async () => {
  const response = await makeGetRequest('/andis/get');
  if (response.status === 200) {
    return({status: response.status, andis: response.data.andis});
  } 
  return({status: response.status, message: response.statusText});
};

export default getAllAndis;
