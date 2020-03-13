/* eslint-disable quotes */
import makePostRequest from '../../../requests/postRequest';

export default async (values) => {
  const { 
    projectName, 
    clientId, 
    projectDescriptionOne, 
    projectDescriptionTwo, 
    projectDescriptionThree, 
    projectImageURL, 
    andiIds, 
    techStackIds 
  } = values;

  const postData = {
    data: {
      "projectName": projectName,
      "clientId": clientId,
      "projectDescriptionOne": projectDescriptionOne,
      "projectDescriptionTwo": projectDescriptionTwo,
      "projectDescriptionThree": projectDescriptionThree,
      "projectImageURL": projectImageURL,
      "andiIds": andiIds,
      "techStackIds": techStackIds
    }
  };

  const response = await makePostRequest('/projects/create', postData);

  const { status, data, statusText } = response;
  
  return {
    status,
    data,
    message: statusText
  } 
} 
