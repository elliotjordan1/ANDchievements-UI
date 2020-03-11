import getAllAndis from '.';
import makeGetRequest from '../../../requests/getRequest/getRequest';

jest.mock('../../../requests/getRequest/getRequest');

describe('getAndis', () => {
  it('returns expected response for successful request', async () => {
    const andiList = [
      {
        andiid: 1,
        andiname: 'Reginald'
      }
    ];

    const expectedResult = {
      status: 200,
      andis: andiList
    };

    const mockResponse = {
      status: 200,
      data: {
        andis: andiList
      }
    }

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const response = await getAllAndis();

    return expect(response).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const mockResponse = {
      status: 404,
      statusText: 'Clients not found'
    };

    const expectedResult = {
      status: 404,
      message: 'Clients not found'
    };

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual(expectedResult);
  });

});
