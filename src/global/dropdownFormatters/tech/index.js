/* eslint-disable import/prefer-default-export */
import { getTechnologies } from '../../../api/handlers/attributeRetrieval';

export default async () => {
  const response = await getTechnologies();

  if (response.status !== 200)
    return [];

  const formattedResponse = response.technologies.map(tech => (
    {
      value: tech.technologyid,
      label: tech.name
    }
  ));

  return formattedResponse;
}