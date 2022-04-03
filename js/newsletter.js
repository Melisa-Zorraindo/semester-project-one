import { openModal } from "./modules/modalPopup.mjs";
import { closeModal } from "./modules/modalPopup.mjs";

const newsletterSubscription = document.querySelector(".newsletter");
const overlaySubscription = document.querySelector(".overlay-subscription");
const domBody = document.querySelector("body");
const email = document.querySelector("#email");
const modalWindow = document.querySelector(".modal-popup");
const closeModalWindowButton = document.querySelector(".close-feedback");

function checkSubscriptionForm(event) {
  event.preventDefault();
  if (checkEmail(email.value)) {
    openModal(modalWindow, overlaySubscription, domBody);
  }
  newsletterSubscription.reset();
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const regExMatches = regEx.test(email);
  return regExMatches;
}

newsletterSubscription.addEventListener("submit", checkSubscriptionForm);

overlaySubscription.addEventListener("click", () =>
  closeModal(modalWindow, overlaySubscription, domBody)
);

closeModalWindowButton.addEventListener("click", () =>
  closeModal(modalWindow, overlaySubscription, domBody)
);
