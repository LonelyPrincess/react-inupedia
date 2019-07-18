/**
 * This module contains a couple of methods that will make it possible to
 * interact with the dogs API used by this application.
 *
 * @module utils/DogAPI
 * @author Sara Hernández Suárez <sara.her.su@gmail.com>
 */

const apiBaseUrl = 'https://dog.ceo/api';

const headers = {
  'Accept': 'application/json',
  'Content-type': 'application/json'
};

// Handle http errors so promise is rejected when needed
const fetchJson = (url, options = {}) => {
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

// TODO: add comments to these methods
const performApiRequest = (url, options) => {
  return fetchJson(url, options)
    .then(parseApiResponse);
};

// Handle api response format to identify errors and throw exceptions if needed
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
  //return performApiRequest(`${apiBaseUrl}/breeds/list/all`);
  return performApiRequest(`./data/breeds.json`)
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
  //return performApiRequest(`${apiBaseUrl}/breed/${breed}/images`);
  return performApiRequest(`./data/images.json`);
};

// TODO: for sub-breeds -> https://dog.ceo/api/breed/retriever/chesapeake/images
