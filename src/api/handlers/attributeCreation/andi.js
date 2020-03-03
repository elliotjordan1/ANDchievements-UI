import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class ANDi {
  appliesTo(attributeType) {
    this.andiType = AttributeTypes.ANDi;

    return attributeType === this.andiType;
  }

  async create(formProps) {
    this.postData = {      
      data : {
        andiFullName : formProps.name,
        andiImageUrl : formProps.imageUrl
      }
    };

    this.response = await makePostRequest('/andis/create', this.postData);

    const { status, data, statusText } = this.response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default ANDi;