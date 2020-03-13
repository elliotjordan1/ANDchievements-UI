export default (values) => {
  const {
    projectTitle,
    clientId,
    clientDescription,
    projectDescription,
    projectOutcomes,
    coverImageUrl,
    projectAndis,
    projectTech
  } = values;

  return {
    projectName: projectTitle,
		clientId,
		projectDescriptionOne: clientDescription,
		projectDescriptionTwo: projectDescription,
		projectDescriptionThree: projectOutcomes,
		projectImageURL: coverImageUrl,
		andiIds: projectAndis.map(x => x.id),
		techStackIds: projectTech.map(x => x.id)
  }
}