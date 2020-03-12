import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import makeGetRequest from '.';

let Mock;

describe('getRequest', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  })
  it('returns correct response for successful request', async () => {
    const mockResponseData = {
      some_data_id: 1,
      some_data_desc: 'Joules'
    };

    const expectedResult = {
      some_data_id: 1,
      some_data_desc: 'Joules'
    }

    Mock.onGet().reply(200, mockResponseData);

    const actualResult = await makeGetRequest('/projects/get');

    expect(actualResult.data).toEqual(expectedResult);
  });
  it('returns correct response for failed network request', async () => {
    const expectedResult = {
      status: 500,
      statusText: 'Unable to connect to server'
    };
    
    Mock.onGet().networkError();

    const actualResult = await makeGetRequest('/projects/get');

    expect(actualResult).toEqual(expectedResult);
  });
  it('returns correct response for failed request', async () => {
    const expectedResult = {
      status: 404,
      statusText: 'Unable to connect to server'
    };
    
    Mock.onGet().reply(404, {});

    const actualResult = await makeGetRequest('/projects/get');

    expect(actualResult.status).toEqual(expectedResult.status);
  });
})