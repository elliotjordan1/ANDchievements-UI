import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import CreateProject from '.';

let Mock;

describe('client - attributeCreation', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  });

  it('returns correct data for successful request', async () => {
    const newProject = {
      projectTitle: 'Test Title'
    };

    Mock.onPost().reply(201, { new_project: newProject })
    
    const actualResult = await CreateProject({ name: 'Jack Bryant', imageUrl: 'http://test.image.png'});

    const expectedResult = {
      status: 201,
      data: {
        new_project: newProject
      },
      message: undefined
    }

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns correct data for failed request', async () => {
    Mock.onPost().reply(404, { })
    
    const actualResult = await CreateProject({ name: 'Jack Bryant', imageUrl: 'http://test.image.png'});

    const expectedResult = {
      status: 404,
      data: {},
      message: undefined
    }

    return expect(actualResult).toEqual(expectedResult);
  });
});
