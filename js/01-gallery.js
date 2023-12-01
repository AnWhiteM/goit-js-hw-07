import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

document.addEventListener("DOMContentLoaded", function () {
  // 1. Створення і рендер розмітки на підставі масиву даних
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
      // Посилання на оригінальне зображення в data-атрибуті source
      image.setAttribute("data-source", item.original);

      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryContainer.appendChild(galleryItem);
    });
  }

  renderGallery(galleryItems);

  // 2. Реалізація делегування на ul.gallery і отримання url великого зображення
  galleryContainer.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.classList.contains("gallery__image")) {
      const imageUrl = event.target.dataset.source;

      // 3. Відкриття модального вікна
      const modal = basicLightbox.create(`
                <img width="800" height="600" src="${imageUrl}">
            `);

      modal.show();

      // 4. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям
      modal.element().addEventListener("click", function () {
        modal.close();
      });
    }
  });

  // Наступний функціонал для закриття модального вікна по клавіші Escape (не обов'язковий)
  document.addEventListener("keydown", function (event) {
    const modal = basicLightbox.instance();

    if (modal && event.key === "Escape") {
      modal.close();
    }
  });
});
