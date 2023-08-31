const display = document.getElementById("display");
let expression = "";

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

function appendToDisplay(value) {
  if (value === '.') {
    expression += value;
    display.value = expression;
  } else if (value === 'C') {
    clearDisplay();
  }
}