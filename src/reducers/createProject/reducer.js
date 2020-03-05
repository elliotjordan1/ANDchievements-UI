import * as ACTIONS from './actions';

export const initialFormState = {
  projectName: '',
  clientId: '',
  projectDescriptionOne: '',
  projectDescriptionTwo: '',
  projectDescriptionThree: '',
  projectImageURL: '',
  andiIds: [],
  techStackIds: []
}

export default (state, action) => {  
  switch (action.type) {
    case ACTIONS.CREATE_PROJECT_ADD_ANDI:
      return {
        ...state,
        andiIds: [...state.andiIds, action.data.new_andi[0].andiid],
      };
    case ACTIONS.CREATE_PROJECT_ADD_TECH:
      return {
        ...state,
        techStackIds: [...state.techStackIds, action.data.new_tech[0].technologyid]
      };
    case ACTIONS.CREATE_PROJECT_ADD_CLIENT:
      return {
        ...state,
        clientId : action.data.new_client[0].clientid,
      }
    default:
      throw new Error('Invalid Create Project Action!');
  }
}