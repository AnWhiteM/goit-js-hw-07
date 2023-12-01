import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  function renderGallery(items) {
    items.forEach((item) => {
      const galleryItem = document.createElement("li");
      galleryItem.classList.add("gallery__item");

      const link = document.createElement("a");
      link.classList.add("gallery__link");
      link.href = item.original;

      const image = document.createElement("img");
      image.classList.add("gallery__image");
      image.src = item.preview;
      image.alt = item.description;

      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryContainer.appendChild(galleryItem);
    });
  }

  renderGallery(galleryItems);

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  lightbox.on("show.simplelightbox", function (e) {
    console.log("Lightbox is shown");
  });

  lightbox.on("close.simplelightbox", function (e) {
    console.log("Lightbox is closed");
  });
});

console.log(galleryItems);
