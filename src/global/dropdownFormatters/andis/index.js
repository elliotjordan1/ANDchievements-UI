import { getAndis } from '../../../api/handlers/attributeRetrieval';

export default async () => {
  const response = await getAndis();

  if (response.status !== 200)
    return [];

  const formattedResponse = response.andis.map(andi => (
    {
      value: andi.andiid,
      label: andi.name
    }
  ));

  return formattedResponse;
}