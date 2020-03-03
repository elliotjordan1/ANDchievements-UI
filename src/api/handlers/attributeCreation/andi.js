import * as AttributeTypes from '../../../global/constants';
import makePostRequest from '../../requests/postRequest/postRequest';

class ANDi {
  appliesTo = async (attributeType) => {
    return attributeType === AttributeTypes.ANDi;
  }

  create = async (formProps) => {
    const postData = {      
      data : {
        andiFullName : formProps.name,
        andiImageUrl : formProps.imageUrl
      }
    };

    const response = await makePostRequest('/andis/create', postData);

    const { status, data, statusText } = response;

    return ({
      status,
      data,
      message: statusText
    })
  }
}

export default ANDi;