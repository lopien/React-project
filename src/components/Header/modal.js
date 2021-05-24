function ModalMessage() {
  let modalMessage = document.querySelector(".modal-message");
  let modalBg = document.querySelector(".modal-bg");
  let body = document.querySelector("body");

  modalMessage.style.display = "block";
  body.style.overflow = "hidden";

  modalBg.addEventListener('click', (event) => {
    event.preventDefault();
    modalMessage.style.display = "none";
    body.style.overflow = "auto";
  });
}

function ModalSettings() {
  let modalSetting = document.querySelector(".modal-setting");
  let modalBg1 = document.querySelector(".modal-bg1");
  let body = document.querySelector("body");

  modalSetting.style.display = "block";
  body.style.overflow = "hidden";

  modalBg1.addEventListener('click', (event) => {
    event.preventDefault();
    modalSetting.style.display = "none";
    body.style.overflow = "auto";
  });
}

export {ModalMessage, ModalSettings};