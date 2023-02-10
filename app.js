let display = document.querySelector(".display");
display.textContent = "0";

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function clear() {
  display.textContent = "0";
}

document.querySelector(".clear").addEventListener("click", () => clear());

function toDisplay(input) {
  let variable =
  displayValue
}

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    setDisplay(button.textContent);
  })});

function setDisplay(input) {
  let displayValue = document.querySelector(".display")
  displayValue.textContent = input;
}
