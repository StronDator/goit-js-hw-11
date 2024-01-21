import { renderImages } from './render-html';
import { createMessage } from './notifications';

const buttonEl = document.querySelector('.search-btn');
const loadingTextEl = document.querySelector('.loading-message');
const loaderEl = document.querySelector('.loader');

export function downloadImages(searchKey) {
  loaderEl.style.display = 'block';
  buttonEl.disabled = true;
  buttonEl.blur();
  galleryEl.innerHTML = '';

  fetchImages(searchKey)
    .then(images => renderImages(images))
    .catch(error => {
      console.error(error);
      createMessage('Error fetching images. Please try again later.');
    })
    .finally(() => {
      loaderEl.style.display = 'none';
      buttonEl.disabled = false;
    });
}

function fetchImages(searchText) {
  const apiKey = '41460845-2ab95350f4581127087fd5faf';
  const searchParamsObject = {
    key: apiKey,
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const searchParams = new URLSearchParams(searchParamsObject);

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits && data.hits.length > 0) {
        return data;
      } else {
        throw new Error('No images found.');
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      createMessage('Error fetching images. Please try again later.');
      throw error;
    });
}

const galleryEl = document.querySelector('.gallery');
