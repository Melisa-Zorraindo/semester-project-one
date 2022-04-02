export function openModal(modalBox, overlay, body) {
  modalBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
}

export function closeModal(modalBox, overlay, body) {
  modalBox.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
}
