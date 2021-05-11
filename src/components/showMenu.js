function ShowMenu() {
  let navbar = document.querySelector(".navbar");
  let layoutBg = document.querySelector(".layout-bg");

  navbar.style.marginLeft = "0px";
  navbar.style.transition = "0.5s";
  layoutBg.style.display = "block";

  // let navbarBtn = document.querySelector(".navbar-btn");
  // let navbar = document.querySelector(".navbar");
  // let layoutBg = document.querySelector(".layout-bg");

  // navbarBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   navbar.style.marginLeft = "0px";
  //   navbar.style.transition = "0.5s";
  //   layoutBg.style.display = "block";
  // });

  // layoutBg.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   navbar.style.marginLeft = "-278px";
  //   navbar.style.transition = "0.5s";
  //   layoutBg.style.display = "none";
  // })
}

function HideMenu() {
  let navbar = document.querySelector(".navbar");
  let layoutBg = document.querySelector(".layout-bg");

  navbar.style.marginLeft = "-278px";
  navbar.style.transition = "0.5s";
  layoutBg.style.display = "none";
}

export {ShowMenu,HideMenu};