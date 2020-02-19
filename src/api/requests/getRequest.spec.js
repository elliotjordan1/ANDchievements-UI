import axios from 'axios';
import makeGetRequest from './getRequest';

jest.mock('axios');

describe('makeGetRequest', () => {
  it('returns data on 200', () => {
    const projects = [{name: 'project 1'}, {name: 'project 2'}];
    axios.get.mockResolvedValue({status: 200, data: projects});

    return makeGetRequest('/get/projects').then(res => expect(res.data).toEqual(projects));
  });

  it('throws 500 error ', () => {
    const expectedResponse = {status: 500,statusText: 'Unable to connect to server'}

    axios.get.mockRejectedValue({error: 'network error'});

    return makeGetRequest('/get/projects').then(res => expect(res).toEqual(expectedResponse));
  });

  it('throws 401 error for bad request', () => {
    const expectedResponse = {status: 401, statusText: 'Unauthorized'}

    axios.get.mockRejectedValue({response: {status: 401, statusText: 'Unauthorized'}});

    return makeGetRequest('/get/projects').then(res => expect(res).toEqual(expectedResponse));
  });
  
});
