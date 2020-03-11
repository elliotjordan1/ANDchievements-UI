import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ANDi from '.';

let Mock;
let ANDiCreator;

describe('andi - attributeCreation', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
    ANDiCreator = new ANDi();
  });

  it('returns correct data for successful request', async () => {
    const newANDi = [{ 
      andiid: 1, 
      name: 'Michelle',
       andiimageurl: 'http://image.url'
    }];

    Mock.onPost().reply(201, { new_andi: newANDi })
    
    const actualResult = await ANDiCreator.create(
      { 
        andiFullName: 'Michelle', 
        andiImageUrl: 'http://image.url'
      });

    const expectedResult = {
      status: 201,
      data: {
        new_andi: newANDi
      },
      message: undefined
    };

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns correct data for a failed request', async () => {
    Mock.onPost().reply(404, { statusText: 'Bad Request' });
    
    const actualResult = await ANDiCreator.create(
      {
        andiFullName: 'Michelle',
        andiImageUrl: 'http://image.url'
      });

    const expectedResult = {
      status: 500,
      message: 'Unable to connect to server',
      data: undefined
    }

    expect(actualResult).toEqual(expectedResult);
  });

  it('appliesTo returns true when andi used in applies to', () =>{
    const actualResult = ANDiCreator.appliesTo('ANDi');

    return expect(actualResult).toBeTruthy();
  });

  it('appliesTo returns false when andi used in applies to', () =>{
    const actualResult = ANDiCreator.appliesTo('TechStack');

    return expect(actualResult).toBeFalsy();
  });
});
