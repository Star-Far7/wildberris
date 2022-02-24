const getGoods = function () {
  const links = document.querySelectorAll(".navigation-link"); // Ссылки нав. меню

  // Обработчик данных с сервера
  const getData = function () {
    fetch("/db/db.json")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("goods", JSON.stringify(data));
      });
  };

  // Cохранем базу в LocalStorage
  links.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault;
      getData();
    });
  });
};
getGoods();
