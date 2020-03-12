import getAllClients from '../../../api/handlers/attributeRetrieval/getClients';

export default async () => {
  const response = await getAllClients();

  if (response.status !== 200)
    return [];

  const formattedResponse = response.clients.map(client => (
    {
      value: client.clientid,
      label: client.clientname
    }
  ));

  return formattedResponse;
}