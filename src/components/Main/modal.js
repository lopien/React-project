function ModalMessage() {
  let modalMessage = document.querySelector(".modal-message");
  let modalBg = document.querySelector(".modal-bg");

  modalMessage.style.display = "block";

  modalBg.addEventListener('click', (event) => {
    event.preventDefault();
    modalMessage.style.display = "none";
  });
}

function ModalSettings() {
  let modalSetting = document.querySelector(".modal-setting");
  let modalBg1 = document.querySelector(".modal-bg1");

  modalSetting.style.display = "block";

  modalBg1.addEventListener('click', (event) => {
    event.preventDefault();
    modalSetting.style.display = "none";
  });
}

export {ModalMessage, ModalSettings};