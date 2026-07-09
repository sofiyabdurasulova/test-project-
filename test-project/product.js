
const cart = [];
const buttons = document.querySelectorAll('.card__add-to-cart');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const productName = button.closest('.card').querySelector('.card__title').textContent.trim();
    cart.push(productName);
    console.log("Товар добавлен в корзину:", cart);
  });
});
const cartButton = document.querySelector('.header__cart-button');
cartButton.addEventListener('click', function () {
  const cartModal = document.querySelector('.cart-modal');
  cartModal.classList.remove('hidden');
  console.log("Корзина открыта. Товары в корзине:", cart);
});
const catalogButton = document.querySelector('.cart-modal__button');
const cartModal = document.querySelector('.cart-modal');
catalogButton.addEventListener('click', function () {
  const containerCards = document.querySelector('.container__cards');
  console.log(containerCards);
  cartModal.classList.add('hidden');
  containerCards.scrollIntoView({ behavior: 'smooth' });
  console.log("Переход к каталогу товаров.");
});