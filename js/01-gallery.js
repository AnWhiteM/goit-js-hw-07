import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  let modalInstance = null;

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

      image.setAttribute("data-source", item.original);

      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryContainer.appendChild(galleryItem);
    });
  }

  renderGallery(galleryItems);

  galleryContainer.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.classList.contains("gallery__image")) {
      const imageUrl = event.target.dataset.source;

      modalInstance = basicLightbox.create(`
                <img width="800" height="600" src="${imageUrl}">
            `);
      modalInstance.show();

      modalInstance.element().addEventListener("click", function () {
        modalInstance.close();
      });
    }
  });
  document.addEventListener("keydown", function (event) {
    if (modalInstance && event.key === "Escape") {
      modalInstance.close();
    }
  });
});
