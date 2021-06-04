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

export {ModalSettings};