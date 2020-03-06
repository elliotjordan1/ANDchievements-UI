import makeGetRequest from '../../../requests/getRequest/getRequest';

const getAllTechnologies = async () => {
  const response = await makeGetRequest('/technology/get');
  if (response.status === 200) {
    return({status: response.status, andis: response.data.technologies});
  } 
  return({status: response.status, message: response.statusText});
};

export default getAllTechnologies;