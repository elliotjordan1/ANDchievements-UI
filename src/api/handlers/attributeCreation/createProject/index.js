import makePostRequest from '../../../requests/postRequest';

export default async (values) => {
  const postData = {
    data: values
  };

  const response = await makePostRequest('/projects/create', postData);

  const { status, data, statusText } = response;
  
  return {
    status,
    data,
    message: statusText
  }
} 
