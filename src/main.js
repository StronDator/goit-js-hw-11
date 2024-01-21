import { createMessage } from './js/notifications';
import { downloadImages } from './js/download';

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('.search-form');
  const loadingMessageEl = document.querySelector('.loading-message');

  if (!formEl || !loadingMessageEl) {
    console.error('Form or loading message element not found.');
    return;
  }

  loadingMessageEl.style.display = 'none';

  formEl.addEventListener('submit', async event => {
    event.preventDefault();

    const searchKey = formEl.elements.search.value.trim();

    if (!searchKey) {
      createMessage('Search must be filled!');
      return;
    }

    formEl.reset();

    try {
      loadingMessageEl.style.display = 'block';
      await downloadImages(searchKey);
    } catch (error) {
      console.error('Error downloading images:', error.message);
      createMessage('Error downloading images. Please try again later.');
    } finally {
      loadingMessageEl.style.display = 'none';
    }
  });
});
