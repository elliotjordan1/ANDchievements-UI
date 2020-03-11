import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAllAndis from '.';

let Mock;

describe('getAndis', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });

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

    Mock.onGet().reply(200, { andis: andiList });

    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const expectedResult = {
      status: 404,
      message: 'Failed to retrieve ANDis'
    };

    Mock.onGet().reply(404, {});
    
    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns expected response for a failed network request', async () => {
    const expectedResult = {
      status: 500,
      message: 'Failed to retrieve ANDis'
    };

    Mock.onGet().networkError();
    
    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual(expectedResult);
  });

});
