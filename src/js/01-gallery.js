// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallerySectionEll = document.querySelector('.gallery');

function createGallary(obj) {
  return obj.map(
    ell => `
      <a class="gallery__item" href="${ell.original}">
        <img
          class="gallery__image"
          src="${ell.preview}"
          alt="${ell.description}"
        />
      </a>`
  );
}

const addGalleryItemsList = createGallary(galleryItems).slice(',').join(' ');

gallerySectionEll.insertAdjacentHTML('beforeend', addGalleryItemsList);

/* options */

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
  overlayOpacity: 0.9,
  howCounter: true,
});

function handleImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

gallerySectionEll.addEventListener('click', handleImgClick);
