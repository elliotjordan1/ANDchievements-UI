import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class Client {
  appliesTo(attributeType) {
    this.clientType = AttributeTypes.Client;

    return attributeType === this.clientType;
  }

  async create(formProps) {
    const { name, imageUrl } = formProps;

    this.postData = {      
      data : {
        clientName: name,
        clientSector: 'N/A',
        clientLogoUrl: imageUrl,
        clientLocationName: 'London'
      }
    };

    this.response = await makePostRequest('/clients/create', this.postData);

    const { status, data, statusText } = this.response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default Client;