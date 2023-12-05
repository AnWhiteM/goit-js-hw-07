import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  let modalInstance;

  const galleryElement = document.getElementById("gallery");

  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
    )
    .join("");

  galleryElement.innerHTML = galleryHTML;

  function openModal(imageUrl) {
    modalInstance = basicLightbox.create(`
    <img width="800" height="600" src="${imageUrl}" alt="Image_description">
  `);
    modalInstance.show();
  }

  function closeModal() {
    if (modalInstance) {
      modalInstance.close();
    }
  }

  function handleImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
      const imageUrl = event.target.dataset.source;
      openModal(imageUrl);
    }
  }

  function handleKeyDown(event) {
    if (modalInstance && event.key === "Escape") {
      closeModal();

      galleryElement.removeEventListener;
      "click", handleImageClick;
    }
  }

  galleryElement.addEventListener("click", handleImageClick);

  document.addEventListener("keydown", handleKeyDown);
});
