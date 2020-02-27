/* eslint-disable no-unused-expressions */
import { shuffleAndSliceArray } from './index';

describe('index.js tests', () => {
  it('returns the same array when array length is less than slice length', () => {
    const shortArray = [1, 2, 3];
    const sliceLength = 5;

    const expectedResult = [1, 2, 3];

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
});
