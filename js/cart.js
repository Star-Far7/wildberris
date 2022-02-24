const cart = function () {
  const cartBtn = document.querySelector(".button-cart"); // Кнопка для активации модального окна
  const cart = document.getElementById("modal-cart"); // Модальное окно
  const closeCart = cart.querySelector(".modal-close"); // Кнопака закрытия модального окна

  // Функция вызова модального окна
  cartBtn.onclick = function () {
    cart.style.display = "flex";
  };
  // Функция закрытия модальног окна
  closeCart.onclick = function () {
    cart.style.display = "";
  };
};
cart();
