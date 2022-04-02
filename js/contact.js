import { openModal } from "./modules/modalPopup.mjs";
import { closeModal } from "./modules/modalPopup.mjs";

const contactForm = document.querySelector(".contact-form");
const modalPopup = document.querySelector(".popup-box");
const closeModalButton = document.querySelector(".close-popup");
const modalBackground = document.querySelector(".overlay");
const documentBody = document.querySelector("body");

function validateForm(event) {
  event.preventDefault();
  openModal(modalPopup, modalBackground, documentBody);
  contactForm.reset();
}

contactForm.addEventListener("submit", validateForm);
closeModalButton.addEventListener("click", () =>
  closeModal(modalPopup, modalBackground, documentBody)
);
modalBackground.addEventListener("click", () =>
  closeModal(modalPopup, modalBackground, documentBody)
);
