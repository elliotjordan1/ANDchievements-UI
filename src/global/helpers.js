export const onInputChange = set => event => set(event.target.value);

export const urlValidator = () => {
  if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(('#url').val())){ 
    return true 
  }
  return false
}

export default onInputChange;