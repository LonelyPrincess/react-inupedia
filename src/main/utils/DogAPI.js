/**
 * This module contains a couple of methods that will make it possible to
 * interact with the dogs API used by this application.
 *
 * @module utils/DogAPI
 * @author Sara Hernández Suárez <sara.her.su@gmail.com>
 */

import { fetchJson } from './HttpUtils';

const apiBaseUrl = 'https://dog.ceo/api';

/**
 * Make a request to the API and parse the response.
 *
 * @param url - URL to which the request will be send.
 * @param options - Object with request configuration (type of request,
 *  data to send along with it and so on)
 */
const performApiRequest = (url, options) => {
  return fetchJson(url, options)
    .then(parseApiResponse);
};

/**
 * Handle API response format to identify errors and throw exceptions if needed
 *
 * @param data - JSON data obtained as a response to a request.
 */
const parseApiResponse = (data) => {
  if (data.status === 'success') {
    return data.message;
  } else {
    console.error(`API returned error ${data.code} - ${data.message}`);
    throw new Error(data.message);
  }
};

/**
 * Obtain the list of dog breeds.
 * @returns {Promise} Promise object with a collection of breeds.
 */
export const getBreedList = () => {
  return performApiRequest(`${apiBaseUrl}/breeds/list/all`)
    .then(data => Object.keys(data)
      .map(breed => ({ name: breed, subtypes: data[breed] })));
};

/**
 * Obtain a list of images for an specific breed.
 * @param {string} breed
 * @param {string} subtype
 * @returns {Promise} Promise object with an array of image URLs.
 */
export const getImagesForBreed = (breed, subtype) => {
  let subtypePath = subtype ? `/${subtype}` : ``;
  return performApiRequest(`${apiBaseUrl}/breed/${breed}${subtypePath}/images`);
};
