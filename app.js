// ***VARIABLES***
let currentNumberArray1 = [];
let currentNumberArray2 = [];
let currentNumber1 = 0;
let currentNumber2 = 0;
let operand = "";

//querySelectors
const displayValue = document.querySelector(".display");
const clearButton = document.querySelector(".clear")
const undoButton = document.querySelector(".undo");
const equalButton = document.querySelector(".equals");
const operators = document.querySelectorAll(".operand");
const numberButtons = document.querySelectorAll(".number");
const floatingPointButton = document.querySelector(".floating-point")

// ***FUNCTIONS***

//NUMBER BUTTONS ASSIGNMENT & ARRAY POPULATION
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(operand == "") {
      currentNumberArray1.push(button.textContent); //add number from HTML to array so you can add more than 1 digit numbers
      currentNumber1 = arrayToNumber(currentNumberArray1);
      console.log(currentNumber1);
      toDisplay(currentNumber1);
    } else {
      currentNumberArray2.push(button.textContent);
      currentNumber2 = arrayToNumber(currentNumberArray2);
      console.log(currentNumber2);
      toDisplay(currentNumber2);
    }
  })});

function arrayToNumber(arr) {
  return parseFloat(arr.join(""));
}

function toDisplay(input) {
  displayValue.textContent = input;
}

//OPERATOR BUTTONS ASSIGNMENT & FUNCTIONS
operators.forEach(operator => {
  operator.addEventListener("click", () => {
    functionName = operator.classList[0] //assign "add", "subtract", "multiply" or "divide" to functionName
    if(currentNumber1 != 0 && currentNumber2 != 0 && operand != "") {
      result();
    }
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

function result() {
  let result = operate(operand, currentNumber1, currentNumber2);
  toDisplay(Math.round(result*100)/100);
  currentNumber1 = result;
  currentNumber2 = 0
  currentNumberArray2 = [];
}

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

//EQUAL BUTTON ASSIGNMENT & FUNCTION
equalButton.addEventListener("click", equals);

function equals() {
  console.log("equal");
  if(operand == "") {
    toDisplay("MISS OPT");
  } else if(currentNumber2 == 0) {
    toDisplay("ERROR DIV 0");
    setTimeout(() => {
      toDisplay(currentNumber1);
    }, 1000);
  } else {
    result();
  }
}

//CLEAR BUTTON ASSIGNMENT & FUNCTION
clearButton.addEventListener("click", clear);

function clear() {
  toDisplay("0");
  currentNumberArray1 = [];
  currentNumberArray2 = [];
  currentNumber1 = 0;
  currentNumber2 = 0;
  operand = "";
}

//UNDO BUTTON ASSIGNMENT
undoButton.addEventListener("click", undo);

function undo() {
  if(currentNumber1 == 0 && currentNumber2 == 0) {
    console.log("both 0");
    return;
  } else if(!currentNumber2) {
    currentNumberArray1.pop();
    currentNumber1 = arrayToNumber(currentNumberArray1);
    console.log("normal pop num1");
      if(isNaN(currentNumber1)) {
        console.log("NaN triggered num1");
        currentNumber1 = 0;
        return toDisplay(currentNumber1);
      }
    currentNumber1 = arrayToNumber(currentNumberArray1);
    console.log(currentNumber1);
    toDisplay(currentNumber1);
  } else {
      currentNumberArray2.pop();
      currentNumber2 = arrayToNumber(currentNumberArray2);
      console.log("normal pop num2");
      if(isNaN(currentNumber2)) {
        console.log("NaN triggered num2");
        currentNumber2 = 0;
      return toDisplay(currentNumber1);
      }
    console.log(currentNumberArray1, currentNumberArray2);
  }
}

//use .includes() for stopping after 1 .
floatingPointButton.addEventListener("click", floatingPoint);

function floatingPoint() {
  currentNumberArray1.push(".");
  console.log(currentNumber1, currentNumberArray1);
  currentNumber1 = arrayToNumber(currentNumberArray1);
  console.log(currentNumber1, currentNumberArray1);
  toDisplay(currentNumber1);
}
