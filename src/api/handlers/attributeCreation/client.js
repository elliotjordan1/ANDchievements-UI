import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class Client {
  appliesTo = async (attributeType) => {
    return attributeType === AttributeTypes.Client;
  }

  create = async (formProps) => {
    const { name, imageUrl } = formProps;

    const postData = {      
      data : {
        clientName: name,
        clientSector: 'N/A',
        clientLogoUrl: imageUrl,
        clientLocationName: 'London'
      }
    };

    const response = await makePostRequest('/clients/create', postData);

    const { status, data, statusText } = response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default Client;