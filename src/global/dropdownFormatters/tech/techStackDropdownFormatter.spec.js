import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getTechnologies from '.';

const techList = [
  {
    technologyid: 1,
    name: 'NodeJS'
  },
  {
    technologyid: 2,
    name: 'ReactJS'
  },
  {
    technologyid: 3,
    name: 'Java'
  }
]

const expectedResult = [
  {
    value: 1,
    label: 'NodeJS'
  },
  {
    value: 2,
    label: 'ReactJS'
  },
  {
    value: 3,
    label: 'Java'
  }
]

let Mock;

describe('techStackDropdownFormatter', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });
  it('returns correct format for successful response', async () => {
    Mock.onGet().reply(200, { technologies: techList });

    const actualResult = await getTechnologies();

    return expect(actualResult).toEqual(expectedResult);
  });

  it('returns correct format for failed network response', async () => {
    Mock.onGet().networkError();

    const actualResult = await getTechnologies();

    return expect(actualResult).toEqual([]);
  });

  it('returns correct format for failed network response', async () => {
    Mock.onGet().reply(404, {});

    const actualResult = await getTechnologies();

    return expect(actualResult).toEqual([]);
  });
});
