
let cart = [];
let buttons = document.querySelectorAll('.card__add-to-cart');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let productName = button.closest('.card').querySelector('.card__title').textContent.trim();
    cart.push(productName);
    console.log("Товар добавлен в корзину:", cart);
  });
});