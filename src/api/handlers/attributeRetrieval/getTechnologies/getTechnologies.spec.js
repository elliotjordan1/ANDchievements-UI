import getAllTech from '.';
import makeGetRequest from '../../../requests/getRequest/getRequest';

jest.mock('../../../requests/getRequest/getRequest');

describe('getProjects', () => {
  it('returns expected response for successful request', async () => {
    const techList = [
      {
        techId: 1,
        techName: 'ReactJS'
      }
    ];

    const expectedResult = {
      status: 200,
      technologies: techList
    };

    const mockResponse = {
      status: 200,
      data: {
        technologies: techList
      }
    }

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllTech();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const mockResponse = {
      status: 404,
      statusText: 'Technologies not found'
    };

    const expectedResult = {
      status: 404,
      message: 'Get technologies request failed'
    };

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllTech();

    return expect(actualResult).toEqual(expectedResult);
  });
});
