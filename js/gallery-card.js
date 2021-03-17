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



function changeSettings(alt, src) {
  lightboxImg.src = src
  lightboxImg.alt = alt
}



const onOpenModalClick = (e) => {
  e.preventDefault();

  if (e.target.localName === "img") {
   

    lightbox.classList.add("is-open");

    changeSettings(e.target.alt, e.target.dataset.source)
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

    changeSettings(" "," ")
    
  }
};

galleryRef.addEventListener("click", onOpenModalClick);
window.addEventListener("keyup", onKeyboardClick);
window.addEventListener("click", onCloseModalClick);
