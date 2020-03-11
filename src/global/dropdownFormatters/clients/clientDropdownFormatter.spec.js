import { getClients } from '.';
import makeGetRequest from '../../../api/requests/getRequest';

jest.mock('../../../api/requests/getRequest');

const clientList = [
  {
    clientid: 1,
    clientname: 'Jack'
  },
  {
    clientid: 2,
    clientname: 'Percy'
  },
  {
    clientid: 3,
    clientname: 'Reginald'
  }
]

const expectedResult = [
  {
    value: 1,
    label: 'Jack'
  },
  {
    value: 2,
    label: 'Percy'
  },
  {
    value: 3,
    label: 'Reginald'
  }
]

describe('clientDropdownFormatter', () => {
  it('returns correct format for successful response', async () => {
    const mockResponse = {
      status: 200, 
      data : { clients: clientList }
    };

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getClients();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns correct format for failed response', async () => {
    const mockResponse = {
      status: 404, 
      data : { clients: clientList }
    };

    makeGetRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const actualResult = await getClients();

    return expect(actualResult).toEqual([]);
  });
});