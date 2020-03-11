import getAllClients from '.';
import makeGetRequest from '../../../requests/getRequest/getRequest';

jest.mock('../../../requests/getRequest/getRequest');

describe('getProjects', () => {
  it('returns expected response for successful request', async () => {
    const clientList = [
      {
        clientid: 1,
        clientname: 'Reginald'
      }
    ];

    const expectedResult = {
      status: 200,
      clients: clientList
    };

    const mockResponse = {
      status: 200,
      data: {
        clients: clientList
      }
    }

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getAllClients();

    return expect(actualResult).toEqual(expectedResult);
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

    const actualResult = await getAllClients();

    return expect(actualResult).toEqual(expectedResult);
  });

});
