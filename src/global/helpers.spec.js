/* eslint-disable no-unused-expressions */
import { shuffleAndSliceArray, urlValidator } from './helpers';

describe('index.js tests', () => {
  it('returns the same array when array length is less than slice length', () => {
    const shortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const sliceLength = 16;

    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const actualResult = shuffleAndSliceArray(shortArray, sliceLength);
    
    expect(actualResult).not.toEqual(expectedResult);
    expect(actualResult.length).toEqual(expectedResult.length);
  });
  it('returns a sliced array when array length is greater than slice length', () => {
    const shortArray = [1, 2, 3, 4, 5, 6, 7];
    const sliceLength = 5;

    const expectedResult = [1, 2, 3, 4, 5, 6, 7];

    const actualResult = shuffleAndSliceArray(shortArray, sliceLength);
    
    expect(actualResult).not.toEqual(expectedResult);
    expect(actualResult.length).toEqual(sliceLength);
  });
  describe('urlValidator', () => {
    it('returns true for a valid URL', () => {
      const validUrl = 'http://www.google.com';

      const actualResult = urlValidator(validUrl);

      expect(actualResult).toBeTruthy();
    });
    it('returns false for an invalid URL', () => {
      const validUrl = 'invalid URL!';

      const actualResult = urlValidator(validUrl);

      expect(actualResult).toBeFalsy();
    })
  })
});
