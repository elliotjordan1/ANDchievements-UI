import PostFormatter from '.';

describe('projectPostFormatter', () => {
  it('correctly formats a valid project values', () => {
    const values = {
      projectTitle: 'A Title',
      clientId: 1,
      clientDescription: 'we',
      projectDescription: 'A desc',
      projectOutcomes: 'Outcomes',
      coverImageUrl: 'image.url',
      projectAndis: [ {id: 1, name: 'James'}, {id: 2, name:'Sam'} ],
      projectTech: [ {id: 3, name: 'ReactJS'}, {id: 4, name:'NodeJS'} ]
    }

    const expectedResult = {
      projectName: 'A Title',
      clientId: 1,
      projectDescriptionOne: 'we',
      projectDescriptionTwo: 'A desc',
      projectDescriptionThree: 'Outcomes',
      projectImageURL: 'image.url',
      andiIds: [1, 2],
      techStackIds: [3, 4]
    }

    const actualResult = PostFormatter(values);

    expect(actualResult).toEqual(expectedResult);
  })
})