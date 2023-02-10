//display
let displayValue = document.querySelector(".display");
displayValue.textContent = "0";
//num1,num2
let currentNumber = [];

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function clear() {
  displayValue.textContent = "0";
}

document.querySelector(".clear").addEventListener("click", () => clear());

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentNumber.push(button.textContent);
    // num.join("");
    // console.log(num.join(""));
    toDisplay(currentNumber.join(""));
  })});

function toDisplay(input) {
  displayValue.textContent = input;
}
