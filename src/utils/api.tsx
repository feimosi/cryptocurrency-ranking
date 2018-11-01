const API_URL = 'https://pro-api.coinmarketcap.com/v1';
const API_KEY = '08db62f1-1996-4742-8b11-e8e481ade597';

/* tslint:disable no-any */
function handleGeneralError(response: any, error: any) {
  console.debug(response);
  console.error('Request error ', error);
}

function handleBadRequestError(response: any) {
  if (response.data && response.data.errorCode === 400 && response.data.message) {
    console.error('Bad request ', response.data.message);
  }

  return response;
}
/* tslint:enable no-any */

export async function get(url: string, options?: RequestInit) {
  return fetch(`${API_URL}${url}&CMC_PRO_API_KEY=${API_KEY}`, {
    mode: 'no-cors',
    ...options,
    method: 'GET',
  }).then(async response =>
      response.json()
        .then(handleBadRequestError)
        .then(data => ({
          data,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          type: response.type,
        }))
        .catch(error => handleGeneralError(response, error)),
  );
}
