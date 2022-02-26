export const getGoods = function () {
  const links = document.querySelectorAll(".navigation-link"); // Ссылки нав. меню
  const viewMore = document.querySelector(".more"); // кнопка больше

  // Отрисовываем карточки
  const renderGoods = (goods) => {
    const goodsContainer = document.querySelector(".long-goods-list"); //Контейнер для карточек

    goodsContainer.innerHTML = ""; // Стираем содержимое контейнера

    // Макет карточки
    goods.forEach((good) => {
      const goodBlock = document.createElement("div"); // Блок карточки

      // Добовляем классы
      goodBlock.classList.add("col-lg-3");
      goodBlock.classList.add("col-sm-6");

      // Содержимое карточки
      goodBlock.innerHTML = `
						<div class="goods-card">
              <span class="label ${good.label ? null : "d-none"}">${
        good.label
      }</span>
							<img src="db/${good.img}" alt="image: ${good.name}" class="goods-image">
              <h3 class="goods-title">${good.name}</h3>
              <p class="goods-description">${good.description}</p>
              <button class="button goods-card-btn add-to-cart" data-id="${
                good.id
              }">
                <span class="button-price">$${good.price}</span>
              </button>
            </div>
			`;

      goodsContainer.append(goodBlock);
    });
  };

  // Обработчик данных с сервера
  const getData = function (value, category) {
    fetch("/db/db.json")
      .then((res) => res.json())
      .then((data) => {
        // Фильтр данных
        const aray = category
          ? data.filter((item) => item[category] === value)
          : data;

        // Воозвращаем базу
        localStorage.setItem("goods", JSON.stringify(aray));

        if (window.location.pathname !== "/goods.html") {
          window.location.href = "/goods.html";
        } else {
          renderGoods(aray);
        }
      });
  };

  // Cохранем базу в LocalStorage
  links.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault;
      const linkValue = item.textContent;
      const category = item.dataset.field;

      getData(linkValue, category);
    });
  });

  // Проверяем наличие данных
  if (
    localStorage.getItem("goods") &&
    window.location.pathname === "/goods.html"
  ) {
    renderGoods(JSON.parse(localStorage.getItem("goods")));
  }

  // Функция кнопки больше
  if (viewMore) {
    viewMore.addEventListener("click", function (event) {
      event.preventDefault;

      getData();
    });
  }
};
