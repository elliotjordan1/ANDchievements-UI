import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import makePostRequest from '.';

describe('makePostRequest tests', () => {
  it('returns expected data on successful request', async () => {
    const expectedResult = [{
      projectId: 1,
      projectName: 'Test Project'
    }];

    const newProject = [
      {
        projectId: 1,
        projectName: 'Test Project'
      }
    ];

    const Mock = new MockAdapter(axios);

    Mock.onPost().reply(201, { new_project: newProject });

    const actualResult = await makePostRequest('/projects/create', {});

    expect(actualResult.data.new_project).toEqual(expectedResult);
  });  
  it('returns expected data on failed network request', async () => {
    const expectedResult = {
      status: 500,
      statusText: 'Unable to connect to server'
    };

    const Mock = new MockAdapter(axios);

    Mock.onPost().networkError();

    const actualResult = await makePostRequest('/projects/create', {});

    expect(actualResult).toEqual(expectedResult);
  });  
  it('sets x-api-key header to a value on request', async () => {
    const Mock = new MockAdapter(axios);

    Mock.onPost().reply(201, {});

    const actualResult = await makePostRequest('/projects/create', {});

    expect(actualResult.config.headers['x-api-key']).toBeDefined();
  });  
  it('sets content type header to application/json', async () => {
    const Mock = new MockAdapter(axios);

    Mock.onPost().reply(201, {});

    const actualResult = await makePostRequest('/projects/create', {});

    expect(actualResult.config.headers['Content-Type']).toBe('application/json');
  });  
});
