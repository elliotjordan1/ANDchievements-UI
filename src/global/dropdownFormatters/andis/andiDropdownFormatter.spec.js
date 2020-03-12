import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { getAllAndis } from '.';

const andiList = [
    {
        'andiid': 1,
        'name': 'James',
        'andiimageurl': ' '
    },
    {
        'andiid': 2,
        'name': 'Michelle',
        'andiimageurl': 'https://i.imgur.com/BCLisr1.png'
    },
    {
        'andiid': 3,
        'name': 'Natalie',
        'andiimageurl': ''
    }
]

const expectedResult = [
  {
    value: 1,
    label: 'James'
  },
  {
    value: 2,
    label: 'Michelle'
  },
  {
    value: 3,
    label: 'Natalie'
  }
]

let Mock;

describe('clientDropdownFormatter', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });
  it('returns correct format for successful response', async () => {
    Mock.onGet().reply(200, { andis: andiList })

    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual(expectedResult);
  });
  it('returns correct format for failed network response', async () => {
    Mock.onGet().networkError();

    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual([]);
  });
  it('returns correct format for failed response', async () => {
    Mock.onGet().reply(404, {});

    const actualResult = await getAllAndis();

    return expect(actualResult).toEqual([]);
  });
});
