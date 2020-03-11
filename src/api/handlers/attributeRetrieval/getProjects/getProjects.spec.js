import getAllProjects from '.';
import makeGetRequest from '../../../requests/getRequest/getRequest';

jest.mock('../../../requests/getRequest/getRequest');

describe('getProjects', () => {
  it('calls makeGetRequest with correct endpoint', async () => {
    const mockResponse = {status: 200, data : {projects:[{title:'Project Test'}]}};
    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));
    const response = await getAllProjects();
    return expect(response).toEqual({status: mockResponse.status, ...mockResponse.data});
  });
  
  it('returns error message for a 404', async () => {
    const mockResponse = {status: 404, statusText : 'project not found'};
    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));
    const response = await getAllProjects();
    return expect(response).toEqual({status: mockResponse.status, message: mockResponse.statusText});
  });

});
