const display = document.querySelector('.calculator-display');
const numberBtns = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const deleteBtn = document.querySelector('.delete');
let fristNumber = "";
let secondNumber = "";
let mathOperator = "";
let result = "";
let afterResult = false;
numberBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    let number = button.textContent.trim();
    if (afterResult === true) {
      fristNumber = "";
      secondNumber = "";
      mathOperator = "";
      display.value = "";
      afterResult = false;

    };
    if (mathOperator === "") {
      fristNumber += number;
    } else {
      secondNumber += number;
    }
    display.value = fristNumber + mathOperator + secondNumber;
  });
});
operatorsBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (afterResult === true) {
      fristNumber = String(result);
      secondNumber = "";
      afterResult = false;
    }
    mathOperator = btn.textContent.trim();
    display.value = fristNumber + mathOperator;
  });
});

equalBtn.addEventListener('click', function () {
  switch (mathOperator) {
    case '+':
      result = Number(fristNumber) + Number(secondNumber);
      break;
    case '-':
      result = Number(fristNumber) - Number(secondNumber);
      break;
    case '*':
      result = Number(fristNumber) * Number(secondNumber);
      break;
    case '/':
      result = Number(fristNumber) / Number(secondNumber);
      break;
  };
  display.value = result;
  afterResult = true;
});
deleteBtn.addEventListener('click', function () {
  display.value = "";
  fristNumber = "";
  secondNumber = "";
  mathOperator = "";
});