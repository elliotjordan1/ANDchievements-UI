import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAll from '.';

let Mock;

describe('getClients', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });

  it('returns expected response for successful request', async () => {
    const clientList = [
      {
        clientId: 1,
        clientName: 'Dekker'
      }
    ];

    const expectedResult = {
      status: 200,
      clients: clientList
    };

    Mock.onGet().reply(200, { clients: clientList });

    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const expectedResult = {
      status: 404,
      message: 'Failed to retrieve Clients'
    };

    Mock.onGet().reply(404, {});
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns expected response for a failed network request', async () => {
    const expectedResult = {
      status: 500,
      message: 'Failed to retrieve Clients'
    };

    Mock.onGet().networkError();
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

});
