function ModalSettings() {
  let modalSetting = document.querySelector(".modal-setting");
  let modalBg1 = document.querySelector(".modal-bg1");

  modalSetting.style.display = "block";

  modalBg1.addEventListener('click', (event) => {
    event.preventDefault();
    modalSetting.style.display = "none";
  });
}

export {ModalSettings};