import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const makeGallery = () => {
  const img = galleryItems
    .map(
      (el) => `
      <a class="gallery__item" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" 
      title =''/>
    </a>`
    )
    .join("");
  galleryEl.innerHTML = img;
};

makeGallery();
// console.log(galleryItems);

// підключення бібліотеки
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
