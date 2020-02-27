import Axios from 'axios';

const url = 'https://658m0jk5l3.execute-api.us-east-1.amazonaws.com/prod/projects/create';
const options = {
    method: 'POST',
    data:    JSON.stringify({
                'data' : {
                    'projectName': 'Laura Dekker Website',
                    'clientId': '6bd08f0e-3c46-463b-9af9-22e17d0928c8',
                    'projectDescriptionOne': 'hello',
                    'projectDescriptionTwo': 'this is the fantastic laura dekker site',
                    'projectDescriptionThree': 'built by my wonderful ANDis',
                    'projectImageURL': 'https://dgogxeanprsya.cloudfront.net/wp-content/uploads/2018/08/anp-17556354-1024x705.jpg',
                    'andiIds': ''['41e233bb-c1ce-46d1-bfbd-e58ade1c4f29'']',
                    'techStackIds': '[''b0d4e0f5-3751-4246-90f9-9533f7212e22'']'
                }
             }),
    headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'x-api-key' : 'YsO9MGt0DwUu2PDTQ4y4TrhRtnJlYFzYWa1NW92PmvDFqcyDGLiacSNDWape'
    },
    url
};
const createProject = async () => {
 try {
    return await Axios(options);
  } catch (error) {
    if (!error.response) {
      return {
        status: 500,
        statusText: 'Unable to connect to server'
      }
    }
    return error.response;
  }
};
export default createProject;