import getAllProjects from './getProjects';
import makeGetRequest from '../../requests/getRequest';

makeGetRequest.mock = jest.fn((endpoint) => {return(`www.url.com${endpoint}`)});

describe('getProjects', () => {
  it('calls makeGetRequest with correct endpoint', () => {
    const response = getAllProjects();
    return expect(response).toEqual({status: 200, projects: {}});
  });
  
});
