function OpenModal(){
  let modal = document.querySelector(".modal");
  let modal_bg = document.querySelector(".modal-bg");
  modal.style.display = "block";
  modal_bg.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });
}

export default OpenModal;