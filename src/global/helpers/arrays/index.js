/* eslint-disable import/prefer-default-export */
export const shuffleAndSliceArray = (array, sliceLength) => {
  let newArray = array;

  while (newArray === array) {
    const arrayLength = array.length;

    const shuffledArray = array.sort(() => Math.random() - 0.5);
    
    newArray = shuffledArray.slice(0, arrayLength > sliceLength ? sliceLength : arrayLength);
  }

  return newArray;
}