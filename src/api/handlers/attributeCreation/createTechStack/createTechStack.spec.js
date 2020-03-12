import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TechStack from '.';

let Mock;
let TechStackCreator;

describe('techStack - attributeCreation', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
    TechStackCreator = new TechStack();
  })
  it('returns correct data for successful requst', async () => {
    const newTechStack = [
      { 
        technologyid: 1, 
        name: 'ReactJS', 
        logoimagepath: 'http://image.url' 
      }
    ];
    
    Mock.onPost().reply(201, { new_tech: newTechStack });
    

    const actualResult = await TechStackCreator.create(
      {
        techName: 'ReactJS', 
        techLogoImagePath: 'http://image.url'
      });

    const expectedResult = {
      status: 201,
      data: {
        new_tech: newTechStack
      },
      message: undefined
    };

    return expect(actualResult).toEqual(expectedResult);
  });
  
  it('returns correct data for failed request', async () => {
    Mock.onPost().reply(404, {});

    const actualResult = await TechStackCreator.create(
      { 
        techName: 'ReactJS', 
        techLogoImagePath: 'http://image.url'
      });

    const expectedResult = {
      status: 404,
      data: {},
      message: undefined
    }

    return expect(actualResult).toEqual(expectedResult);
  });

  it('appliesTo returns true when andi used in applies to', () =>{
    const actualResult = TechStackCreator.appliesTo('Tech Stack');

    return expect(actualResult).toBeTruthy();
  });

  it('appliesTo returns false when andi used in applies to', () =>{
    const actualResult = TechStackCreator.appliesTo('Client');

    return expect(actualResult).toBeFalsy();
  });
});
