//display
let displayValue = document.querySelector(".display");
displayValue.textContent = "0";
//num1,num2
let currentNumberArray = [];

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
  currentNumberArray = [];
}

document.querySelector(".clear").addEventListener("click", () => clear());

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentNumberArray.push(button.textContent);
    console.log(currentNumberArray);
    toDisplay(currentNumberArray.join(""));
  })});

function toDisplay(input) {
  displayValue.textContent = input;
}

let operators = document.querySelectorAll(".operand")
operators.forEach(operator => {
  operator.addEventListener("click", () => {
    let functionName = operator.classList[0]
    let currentNumber = currentNumberArray.join("");
    // operate(window[functionName](2,3))
    switch(functionName) {
      case "add":
        // console.log(currentNumber);
        console.log(operate(add,currentNumber,3));
        break
      case "subtract":
        console.log(operate(subtract,currentNumber,3));
        break
      case "multiply":
        console.log(operate(multiply,currentNumber,3));
        break
      case "divide":
        console.log(operate(divide,currentNumber,3));
        break
    }
  })});

function equals() {

}
