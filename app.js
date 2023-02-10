//display
let displayValue = document.querySelector(".display");
displayValue.textContent = "0";
//num1,num2
let currentNumberArray1 = [];
let currentNumberArray2 = [];
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
  operand = "";
}

document.querySelector(".clear").addEventListener("click", clear);

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(operand == "") {
      currentNumberArray1.push(button.textContent);
      console.log(currentNumberArray1);
      toDisplay(currentNumberArray1.join(""));
    } else {
      currentNumberArray2.push(button.textContent);
      console.log(currentNumberArray2);
      toDisplay(currentNumberArray2.join(""));

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
        // console.log(currentNumber);
        operand = "add";
        // console.log(operate(add,currentNumber,3));
        break
      case "subtract":
        operand = "subtract";
        // console.log(operate(subtract,currentNumber,3));
        break
      case "multiply":
        operand = "multiply";
        // console.log(operate(multiply,currentNumber,3));
        break
      case "divide":
        operand = "divide";
        // console.log(operate(divide,currentNumber,3));
        break
    }
  })});

let equal = document.querySelector(".equals");
equal.addEventListener("click", equals);

function equals() {
  console.log("equal");
}
