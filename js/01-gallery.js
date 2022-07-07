import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const makeGallery = () => {
  const img = galleryItems
    .map(
      (el) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
        <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
            />
        </a>
    </div>`
    )
    .join("");
  galleryEl.innerHTML = img;
};

makeGallery();

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src= '${event.target.dataset.source}'>
`,
    {
      onShow: (instance) => {
        document.onkeyup = (event) => {
          onEscape(event, instance);
        };
      },
      onClose: () => {
        document.onkeyup = null;
      },
    }
  );

  instance.show();

  function onEscape(event, instance) {
    console.log(event);
    if (event.code !== "Tab") {
      return;
    }
    instance.close();
  }
});
