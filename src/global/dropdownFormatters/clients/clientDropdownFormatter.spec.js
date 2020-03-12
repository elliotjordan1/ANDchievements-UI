import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getClients } from '.';

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

let Mock;

describe('clientDropdownFormatter', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });
  it('returns correct format for successful response', async () => {
    Mock.onGet().reply(200, { clients: clientList });
    const actualResult = await getClients();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns correct format for failed network response', async () => {
    Mock.onGet().networkError();

    const actualResult = await getClients();

    return expect(actualResult).toEqual([]);
  });

  it('returns correct format for failed network response', async () => {
    Mock.onGet().reply(404, {});

    const actualResult = await getClients();

    return expect(actualResult).toEqual([]);
  });
});
