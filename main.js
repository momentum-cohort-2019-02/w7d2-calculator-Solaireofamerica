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
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calc_display');
    display.value = calculator.displayValue;
}

updateDisplay();