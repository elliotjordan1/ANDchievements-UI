import getAllProjects from '.';
import makeGetRequest from '../../../requests/getRequest/getRequest';

jest.mock('../../../requests/getRequest/getRequest');

describe('getProjects', () => {
  it('returns expected response for successful request', async () => {
    const projectList = [
      {
        projectId: 1,
        projectName: 'Reginald'
      }
    ];

    const expectedResult = {
      status: 200,
      projects: projectList
    };

    const mockResponse = {
      status: 200,
      data: {
        projects: projectList
      }
    }

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllProjects();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns correct response for a failed request', async () => {
    const mockResponse = {
      status: 404, 
      statusText : 'Projects not found!'
    };

    const expectedResult = {
      status: 404,
      message: 'Projects not found!'
    }

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllProjects();

    return expect(actualResult).toEqual(expectedResult);
  });

});
