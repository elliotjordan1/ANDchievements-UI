import axios from 'axios';
import makePostRequest from './postRequest';

jest.mock('axios');

describe('makeGetRequest', () => {
  it('returns data on 200', () => {
    const returned = {id: 'abcTest'};
    axios.post.mockResolvedValue({status: 200, data: returned});

    return makePostRequest('/andis/create').then(res => expect(res.data).toEqual(returned));
  });
  
});
