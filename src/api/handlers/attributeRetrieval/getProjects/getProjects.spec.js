import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAll from '.';

let Mock;

describe('getProjects', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });

  it('returns expected response for successful request', async () => {
    const projectList = [
      {
        projectId: 1,
        projectName: 'CST'
      }
    ];

    const expectedResult = {
      status: 200,
      projects: projectList
    };

    Mock.onGet().reply(200, { projects: projectList });

    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const expectedResult = {
      status: 404,
      message: 'Failed to retrieve Projects'
    };

    Mock.onGet().reply(404, {});
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns expected response for a failed network request', async () => {
    const expectedResult = {
      status: 500,
      message: 'Failed to retrieve Projects'
    };

    Mock.onGet().networkError();
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

});
