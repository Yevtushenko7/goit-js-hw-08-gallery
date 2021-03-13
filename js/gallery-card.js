import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const lightboxImg = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");

const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

galleryRef.innerHTML = markup;


const onOpenModalClick = (e) => {
  e.preventDefault();

  if (e.target.localName === "img") {
    lightboxImg.src = e.target.dataset.source;
    lightboxImg.alt = e.target.alt;

    lightbox.classList.add("is-open");
  }
};

const onKeyboardClick = (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("is-open");
  }
};

const onCloseModalClick = (e) => {
  if (e.target.localName !== "img") {
    lightbox.classList.remove("is-open");

    lightboxImg.src = "";
    lightboxImg.alt = "";
  }
};

galleryRef.addEventListener("click", onOpenModalClick);
window.addEventListener("keyup", onKeyboardClick);
window.addEventListener("click", onCloseModalClick);
