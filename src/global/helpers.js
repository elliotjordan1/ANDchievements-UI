/* eslint-disable import/prefer-default-export */

export const shuffleAndSliceArray = (array, sliceLength) => {
  const arrayLength = array.length;

  const shuffledArray = array.sort(() => Math.random() - 0.5);
  
  return shuffledArray.slice(0, arrayLength > sliceLength ? sliceLength : arrayLength);
}