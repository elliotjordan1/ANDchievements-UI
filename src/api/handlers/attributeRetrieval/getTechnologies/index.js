import makeGetRequest from '../../../requests/getRequest/getRequest';

export default async () => {
  const response = await makeGetRequest('/technology/get');

  const { status, data } = response

  if (response.status !== 200) {
    const fail = {
      status, 
      message: 'Get technologies request failed'
    };
    
    return(fail);
  } 

  const success = {
    status,
    technologies: data.technologies
  };

  return(success);
};