import Axios from 'axios';

const getAllProjects = async () => {
  const response = await Axios.get('https://eaiec6cwd2.execute-api.us-east-1.amazonaws.com/dev/projects/get');
  return response;
};

export default getAllProjects;