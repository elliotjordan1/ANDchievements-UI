import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getAll from '.';

let Mock;

describe('getTechnologies', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });

  it('returns expected response for successful request', async () => {
    const technologyList = [
      {
        techId: 1,
        techName: 'ReactJS'
      }
    ];

    const expectedResult = {
      status: 200,
      technologies: technologyList
    };

    Mock.onGet().reply(200, { technologies: technologyList });

    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns expected response for a failed request', async () => {
    const expectedResult = {
      status: 404,
      message: 'Failed to retrieve Technologies'
    };

    Mock.onGet().reply(404, {});
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns expected response for a failed network request', async () => {
    const expectedResult = {
      status: 500,
      message: 'Failed to retrieve Technologies'
    };

    Mock.onGet().networkError();
    
    const actualResult = await getAll();

    return expect(actualResult).toEqual(expectedResult);
  });

});
