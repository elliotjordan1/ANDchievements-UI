import TechStack from './techStack';
import makePostRequest from '../../requests/postRequest/postRequest';

jest.mock('../../requests/postRequest/postRequest');

describe('techStack - attributeCreation', () => {
  it('calls makePostRequest with correct endpoint', async () => {
    const TechStackCreator = new TechStack();

    const mockResponse = {status: 201, data : { name: 'Me', imageUrl: 'test'}};

    makePostRequest.mockReturnValueOnce(Promise.resolve(mockResponse));
    
    const response = await TechStackCreator.create({ name: 'Me', imageUrl: 'test'});

    const expectedResult = {
      data: {
        imageUrl: 'test',
        name: 'Me'
      },
      message: undefined,
      status: 201
    };

    return expect(response).toEqual(expectedResult);
  });
  
  it('returns error message for a 404', async () => {
    const TechStackCreator = new TechStack();

    const mockResponse = {status: 404, statusText : 'tech stack creation failed'};

    makePostRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const response = await TechStackCreator.create({ error: 'Me', imageUrl: 'test'});

    return expect(response).toEqual({status: mockResponse.status, message: mockResponse.statusText});
  });

  it('appliesTo returns true when andi used in applies to', () =>{
    const TechStackCreator = new TechStack();

    const actualResult = TechStackCreator.appliesTo('Tech Stack');

    return expect(actualResult).toBeTruthy();
  });

  it('appliesTo returns false when andi used in applies to', () =>{
    const TechStackCreator = new TechStack();

    const actualResult = TechStackCreator.appliesTo('Client');

    return expect(actualResult).toBeFalsy();
  });
});
