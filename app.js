//display
let displayValue = document.querySelector(".display");
displayValue.textContent = "0";
//num1,num2
let currentNumberArray1 = [];
let currentNumberArray2 = [];
let currentNumber1;
let currentNumber2;
let operand = "";

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
  currentNumberArray1 = [];
  currentNumberArray2 = [];
  currentNumber1 = 0;
  currentNumber2 = 0;
  operand = "";
}

document.querySelector(".clear").addEventListener("click", clear);

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(operand == "") {
      currentNumberArray1.push(button.textContent);
      console.log(currentNumberArray1);
      currentNumber1 = parseInt(currentNumberArray1.join(""));
      console.log(currentNumber1);
      toDisplay(currentNumber1);
    } else {
      currentNumberArray2.push(button.textContent);
      console.log(currentNumberArray2);
      currentNumber2 = parseInt(currentNumberArray2.join(""));
      console.log(currentNumber2);
      toDisplay(currentNumber2);
    }
  })});

function toDisplay(input) {
  displayValue.textContent = input;
}

let operators = document.querySelectorAll(".operand")
operators.forEach(operator => {
  operator.addEventListener("click", () => {
    functionName = operator.classList[0]
    console.log(functionName);
    switch(functionName) {
      case "add":
        operand = add;
        break
      case "subtract":
        operand = subtract;
        break
      case "multiply":
        operand = multiply;
        break
      case "divide":
        operand = divide;
        break
    }
  })});

let equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", equals);

function equals() {
  console.log("equal");
  result = operate(operand, currentNumber1, currentNumber2);
  currentNumber1 = result;
  currentNumber2 = 0
  currentNumberArray2 = [];
  console.log(result);
  toDisplay(Math.round(result*100)/100);
}
