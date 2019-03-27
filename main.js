// 'use strict'

// const keys = document.querySelectorAll('.calc_keys')
// console.log(keys)

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action

//         if (!action) {
//             console.log('number')
//         }

//         if (
//             action === 'add' ||
//             action === 'multiply' ||
//             action === 'divide' ||
//             action === 'subtract'
//         ) {
//             console.log('operator key')
//         }
//         if (action === decimal) {
//             console.log('decimal key')
//         }
//         if (action === clear) {
//             console.log('clear key')
//         }
//         if (action === calculate) {
//             console.log('equals key')
//         }
//     }
// })


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

    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate[operator](firstOperand, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.secondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}

const calculate = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
}

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
    } // the above if statement exits the function if they click on something in the calculator that is not a button
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
        console.log('clear', targer.value);
        return
    }
    inputDigit(target.value);
    updateDisplay();


})