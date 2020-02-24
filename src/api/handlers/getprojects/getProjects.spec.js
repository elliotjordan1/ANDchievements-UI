import getAllProjects from './getProjects';


describe('getProjects', () => {
  it('calls makeGetRequest with correct endpoint', () => {
    const response = getAllProjects();
    return expect(response).toEqual({status: 200, projects: {}});
  });
  
});
