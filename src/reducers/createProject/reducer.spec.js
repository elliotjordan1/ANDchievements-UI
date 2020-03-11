import reducer from './reducer';

describe('createProject - reducer', () => {
  it('throws an error when an action is submitted that does not exist', () => {
    try {
      reducer({}, { type: 'I WILL NEVER EXIST' });
    } catch (ex) {
      expect(ex.message).toEqual('Invalid Create Project Action!');
    }
  })
})