import axios from 'axios';
import makePostRequest from './postRequest';

jest.mock('axios');

describe('makePostRequest tests', () => {
  it('returns data on 200', async () => {
    const content = {andiId: 'abcTest'};
    axios.mockResolvedValue({status: 200, new_andi: content});

    return makePostRequest('/andis/create', content).then(res => {expect(res.new_andi).toEqual(content); expect(res.status).toEqual(200)});
  });
  
});
