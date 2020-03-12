import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Client from '.';

let Mock;
let ClientCreator;

describe('client - attributeCreation', () => {
  beforeEach(() => {
    ClientCreator = new Client();
    Mock = new MockAdapter(axios);
  });

  it('returns correct data for successful request', async () => {
    const newClient = [{ name: 'Jack Bryant', imageUrl: 'http://test.image.png'}]

    Mock.onPost().reply(201, { new_client: newClient })
    
    const actualResult = await ClientCreator.create({ name: 'Jack Bryant', imageUrl: 'http://test.image.png'});

    const expectedResult = {
      status: 201,
      data: {
        new_client: newClient
      },
      message: undefined
    }

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns correct data for failed request', async () => {
    Mock.onPost().reply(404, { statusText: 'Bad Request'});

    const actualResult = await ClientCreator.create({ name: 'Jack Bryant', imageUrl: 'http://test.image.png' })

    const expectedResult = {
      status: 404,
      data: {
        statusText: 'Bad Request'
      },
      message: undefined
    };

    expect(actualResult).toEqual(expectedResult);
  });

  it('appliesTo returns true when andi used in applies to', () =>{
    const actualResult = ClientCreator.appliesTo('Client');

    return expect(actualResult).toBeTruthy();
  });

  it('appliesTo returns false when andi used in applies to', () =>{
    const actualResult = ClientCreator.appliesTo('TechStack');

    return expect(actualResult).toBeFalsy();
  });
});
