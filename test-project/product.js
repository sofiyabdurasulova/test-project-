const cart = [];
const addToCartButtons = document.querySelectorAll('.card__add-to-cart');
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    const productName = card.querySelector('.card__title').textContent;
    const productPrice = card.querySelector('.card__price').textContent;
    const productImage = card.querySelector('.card__img').src;
    cart.push({ name: productName, price: productPrice, image: productImage });
    console.log("Товар добавлен в корзину:", { name: productName, price: productPrice, image: productImage });
  });
});
const cartModalInfo = document.querySelector('.cart-modal__info');
const cartModalItems = document.querySelector('.cart-modal__items');
if (cart.length === 0) {
  cartModalInfo.style.display = "flex"; // показать пустую корзину
  cartModalItems.style.display = "none";
} else {
  cartModalInfo.style.display = "none"; // скрыть пустую корзину
  cartModalItems.style.display = "block";
}
cart.forEach(function (item) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-modal__item');
  cartItem.innerHTML = `
  <img class="cart-modal__item-img" src="${item.image}" alt="${item.name}">
  <div class="cart-modal__item-title">${item.name}</div>
  <div class="cart-modal__item-price">${item.price}</div>
  <button class="cart-modal__remove"><i class="fa-solid fa-trash"></i></button>
`;
  cartModalItems.appendChild(cartItem);
  cartItem.style.border = "2px solid red";
  console.log(cartModalItems.innerHTML);
  console.log("Товар отображен в корзине:", item);
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
//const cartModalEmptyRemove = document.querySelector('.cart-modal__empty-remove');
//cartModalEmptyRemove.addEventListener('click', function () {
//const card = document.querySelector('.card');
//console.log('card');
//});