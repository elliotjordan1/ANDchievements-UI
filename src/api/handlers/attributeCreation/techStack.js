import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class TechStack {
  appliesTo = async (attributeType) => {
    return attributeType === AttributeTypes.TechStack;
  }

  create = async (formProps) => {
    const { name, imageUrl } = formProps;

    const postData = {      
      data : {
        techName: name,
        techLogoImagePath: imageUrl
      }
    };

    const response = await makePostRequest('/tech/create', postData);

    const { status, data, statusText } = response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default TechStack;