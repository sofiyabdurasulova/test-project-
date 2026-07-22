const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const deleteBtn = document.querySelector('.delete')
let a = "";
let b = "";
let operator = "";
let result = "";
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    display.value += button.textContent.trim()
  });
});
operators.forEach(function (btn) {
  btn.addEventListener('click', function () {
    a = display.value;
    operator = btn.textContent.trim();
    display.value = "";
  });
});

equal.addEventListener('click', function () {
  b = display.value;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
  };
  display.value = result
});
deleteBtn.addEventListener('click', function () {
  display.value = "";
});