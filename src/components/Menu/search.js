function Search() {
  // Объявить переменные
  let input = document.querySelector(".navbar_input");
  let filter = input.value.toUpperCase();
  let ul = document.querySelector(".navbar");
  let li = ul.getElementsByTagName("li");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  let i;
  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export default Search;