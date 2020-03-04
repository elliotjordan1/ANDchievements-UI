import Client from './client';
import makePostRequest from '../../requests/postRequest/postRequest';

jest.mock('../../requests/postRequest/postRequest');

describe('client - attributeCreation', () => {
  it('calls makePostRequest with correct endpoint', async () => {
    const ClientCreator = new Client();

    const mockResponse = {status: 201, data : { name: 'Me', imageUrl: 'test'}};

    makePostRequest.mockReturnValueOnce(Promise.resolve(mockResponse));
    
    const response = await ClientCreator.create({ name: 'Me', imageUrl: 'test'});

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
    const ClientCreator = new Client();

    const mockResponse = {status: 404, statusText : 'client creation failed'};

    makePostRequest.mockReturnValueOnce(Promise.resolve(mockResponse));

    const response = await ClientCreator.create({ error: 'Me', imageUrl: 'test'});

    return expect(response).toEqual({status: mockResponse.status, message: mockResponse.statusText});
  });

  it('appliesTo returns true when andi used in applies to', () =>{
    const ClientCreator = new Client();

    const actualResult = ClientCreator.appliesTo('Client');

    return expect(actualResult).toBeTruthy();
  });

  it('appliesTo returns false when andi used in applies to', () =>{
    const ClientCreator = new Client();

    const actualResult = ClientCreator.appliesTo('TechStack');

    return expect(actualResult).toBeFalsy();
  });
});
