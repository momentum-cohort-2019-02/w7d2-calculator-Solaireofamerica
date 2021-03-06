'use strict'

// instantiates the calculator object with base values so we can manipulate the values and other things based on the values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null,
}

function inputDigit(digit) {
    const {
        displayValue,
        secondOperand
    } = calculator;

    if (secondOperand === true) {
        calculator.displayValue = digit;
        calculator.secondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator)
}
// the '?' is a conditional operator that reasigns calculator.display value to the user input digit if it's currently displaying a zero
// and if the display is a number then it adds the new number to the end of the displayValue object

function inputDecimal(dot) {
    // exits the function if secondOperand is truthy. secondOperand becomes true when the use clicks on an operator
    if (calculator.secondOperand) return;

    //apends a decimal point to the end the the displayValue
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}
// if the displayValue does not already contain a decimal point then it gets appended when the user clicks on the decimal button

function inputOperator(nextOperator) {
    const {
        firstOperand,
        displayValue,
        operator,
    } = calculator;
    const inputValue = parseFloat(displayValue);

    // this if statement checks if operator exists and if secondOperand is true, then updates the current 
    // operator and exits the funcstion early so no calculations are performed
    if (operator && calculator.secondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = calculate[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.secondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}
// the actual math operations 
/* the "=>" is called an arrow function.
it shortens the syntax so instead of:
function name(parameters){
    return parameter1 + parameter2;
}
name(2, 2)
you can write:
'+': (parameter1, parameter2) => parameter1 + parameter2 
and it automatically gets returned when you call that function name. 
*/

const calculate = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
}
// resets all objects to original state
function clearCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.secondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}
// whenever you call this function then it updates the display based on what the objecs values are. but only shows the operands
function updateDisplay() {
    const display = document.querySelector('.calc-display');
    display.value = calculator.displayValue;
}
updateDisplay()


// this takes all of the html objects under the class '.calc-keys' and adds an eventlistener to 
// them and runs through the if statements if they are clicked on
const keys = document.querySelector('.calc-keys')
keys.addEventListener('click', (event) => {
    const {
        target
    } = event;
    if (!target.matches('button')) {
        return
    } // the above if statement exits the function if they click on something in the calculator object that is not a button
    if (target.classList.contains('operator')) {
        inputOperator(target.value);
        updateDisplay();
        return
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return
    }
    if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return
    }
    inputDigit(target.value);
    updateDisplay();
})