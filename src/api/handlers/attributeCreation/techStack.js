import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class TechStack {
  appliesTo(attributeType) {
    this.techStack = AttributeTypes.TechStack;

    return attributeType === this.techStack;
  }

  async create(formProps) {
    const { name, imageUrl } = formProps;

    this.postData = {      
      data : {
        techName: name,
        techLogoImagePath: imageUrl
      }
    };

    this.response = await makePostRequest('/tech/create', this.postData);

    const { status, data, statusText } = this.response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default TechStack;