export const onInputChange = set => event => set(event.target.value);

export const urlValidator = (givenValue) => {
  return (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test((givenValue)));
}

export const shuffleAndSliceArray = (array, sliceLength) => {
  let newArray = array;

  while (newArray === array) {
    const arrayLength = array.length;

    const shuffledArray = array.sort(() => Math.random() - 0.5);
    
    newArray = shuffledArray.slice(0, arrayLength > sliceLength ? sliceLength : arrayLength);
  }

  return newArray;
}

export default onInputChange;
