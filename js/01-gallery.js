import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  let modalInstance = null;

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

  galleryElement.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
      const imageUrl = event.target.dataset.source;

      modalInstance = basicLightbox.create(`
        <img width="800" height="600" src="${imageUrl}" alt = "Image_descritpion">
      `);
      modalInstance.show();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (modalInstance && event.key === "Escape") {
      modalInstance.close();
    }
  });
});
