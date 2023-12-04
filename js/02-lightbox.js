import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  const galleryHTML = galleryItems
    .map(
      (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `
    )
    .join("");

  galleryContainer.innerHTML = galleryHTML;

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
