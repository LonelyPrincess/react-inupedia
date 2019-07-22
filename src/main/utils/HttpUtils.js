/**
 * Call `fetch` to perform a request that will both receive and send a JSON
 * object.
 *
 * This also handles HTTP errors, so the promise is rejected if the request
 * obtained an error code instead of a 200 (OK).
 *
 * @author Sara Hernández Suárez <sara.her.su@gmail.com>
 *
 * @param url - URL to request.
 * @param options - Object to customize the request. It's an optional value.
 *
 * @return A promise object resolved with a JSON response.
 * @throws Error object with a message describing the issue.
 */
export const fetchJson = (url, options = {}) => {
  const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  };

  return fetch(url, { headers, ...options })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.error(`HTTP request failed with code ${res.status} - ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
};
