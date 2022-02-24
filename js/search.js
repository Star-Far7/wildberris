const search = function () {
  const input = document.querySelector(".search-block > input"); // input сторики поиска
  const searchBtn = document.querySelector(".search-block > button"); // Кнопка сторки поиска
  let searchValue; // Значение стоки поиска

  // Функция присвоения значения инпута
  input.addEventListener("input", (e) => {
    searchValue = e.target.value;
  });

  // Функция отображения значения
  searchBtn.onclick = () => console.log(searchValue);
};
search();
