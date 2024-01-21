import { createMessage } from './notifications';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const lightboxConfig = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
};

export const gallery = new SimpleLightbox('.gallery a', lightboxConfig);

function generateImageHTML(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      <ul class="property-list">
        <li class="property-item">
          <p class="property-title">Likes</p>
          <p class="property-value">${likes}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Views</p>
          <p class="property-value">${views}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Comments</p>
          <p class="property-value">${comments}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Downloads</p>
          <p class="property-value">${downloads}</p>
        </li>
      </ul>  
    </a>`;
}

export function renderImages(images) {
  if (images.hits.length === 0) {
    galleryEl.innerHTML = '';
    createMessage('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  const galleryHTML = images.hits.map(generateImageHTML).join('');
  galleryEl.innerHTML = galleryHTML;
  gallery.refresh();
}
