import makeGetRequest from '../../../requests/getRequest';

export default async () => {
  const response = await makeGetRequest('/projects/get');

  const { status, data } = response;

  if (response.status !== 200) {
    const fail = {
      status,
      message: 'Failed to retrieve Projects'
    };

    return(fail);
  } 

  const success = {
    status,
    projects: data.projects
  }

  return(success);
};