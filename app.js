// ***VARIABLES***
let currentNumberArray1 = [];
let currentNumberArray2 = [];
let currentNumber1 = 0;
let currentNumber2 = 0;
let displayChain = [0];
let operand;

// ***querySelectors***
const displayValue = document.querySelector(".display");
const clearButton = document.querySelector(".clear")
const undoButton = document.querySelector(".undo");
const equalButton = document.querySelector(".equals");
const operatorButtons = document.querySelectorAll(".operand");
const numberButtons = document.querySelectorAll(".number");
const floatingPointButton = document.querySelector(".floating-point")

// ***FUNCTIONS***

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(operand == null) { //operand empty
      currentNumberArray1.push(button.textContent);
      currentNumber1 = arrayToNumber(currentNumberArray1);
      displayChain[0] = currentNumber1;
      console.log(currentNumber1);
    } else if(operand && typeof displayChain[displayChain.length - 1] == "number") {
      currentNumberArray2.push(button.textContent);
      currentNumber2 = arrayToNumber(currentNumberArray2);
      displayChain[displayChain.length - 1] = currentNumber2;
      console.log(currentNumber2);
    } else { //operand populated
      currentNumberArray2.push(button.textContent);
      currentNumber2 = arrayToNumber(currentNumberArray2);
      if (typeof displayChain[displayChain.length - 1] == "number") {
        displayChain[displayChain.length - 1] = currentNumber2;
      } else {
        displayChain[displayChain.length] = currentNumber2;
      }
      console.log(currentNumber2);
    }
    toDisplay();
  })});

function arrayToNumber(arr) { //arr -> string -> floating number
  return parseFloat(arr.join(""));
}

function toDisplay() {
  console.log(displayChain);
  displayValue.textContent = displayChain.join("").slice(0,16);
}

//OPERATOR BUTTONS ASSIGNMENT & FUNCTIONS
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", () => {
    functionName = operatorButton.classList[0] //assign "add", "subtract", "multiply" or "divide" to functionName
    if(currentNumber1 && currentNumber2 && operand) {
      result();
    }
    console.log(functionName);
    switch(functionName) {
      case "add":
        operand = add;
        displayChain.push(" + ");
        break
      case "subtract":
        operand = subtract;
        displayChain.push(" - ");
        break
      case "multiply":
        operand = multiply;
        displayChain.push(" * ");
        break
      case "divide":
        operand = divide;
        displayChain.push(" / ");
        break
    }
  toDisplay()
})});

function result() {
  let result = operate(operand, currentNumber1, currentNumber2);
  currentNumber1 = result;
  displayChain = [result];
  currentNumber2 = 0
  currentNumberArray2 = [];
  operand = null;
  console.log(result);
  toDisplay();
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
  if(!operand) {
    displayChain = ["MISSING OPERATOR"];
    toDisplay();
    setTimeout(() => {
      displayChain = [currentNumber1];
      toDisplay();
    }, 1200);
  } else if(currentNumber2 == 0 && operand == divide) {
      displayChain = ["DIVISION BY 0"];
      toDisplay();
      setTimeout(() => {
        displayChain = [currentNumber1 + " / "];
        toDisplay();
      }, 1200);
  } else if(!currentNumber2 && operand) {
      displayChain = ["ERROR: NUMBER 2"];
      toDisplay();
      setTimeout(() => {
        displayChain = [currentNumber1];
        toDisplay();
      }, 1400);
    } else {
    result();
  }
}

//CLEAR BUTTON ASSIGNMENT & FUNCTION
clearButton.addEventListener("click", clear);

function clear() {
  currentNumberArray1 = [];
  currentNumberArray2 = [];
  currentNumber1 = 0;
  currentNumber2 = 0;
  displayChain = [0];
  operand = null;
  toDisplay();
  console.log("clear");
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
  if(!currentNumber2) {
    if(!currentNumberArray1.includes(".")) {
      currentNumberArray1.push(".");
      currentNumber1 = currentNumberArray1.join("");
      console.log(currentNumber1, currentNumberArray1);
      toDisplay(currentNumber1);
    } else {
      return;
    }
  } else {
    if(!currentNumberArray2.includes(".")) {
      currentNumberArray2.push(".");
      currentNumber2 = currentNumberArray2.join("");
      console.log(currentNumber1, currentNumberArray1);
      toDisplay(currentNumber2);
    } else {
      return;
    }
  }
}
