//QUERY SELECTORS
let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-ac]')
let deleteButton = document.querySelector('[data-del]')
let equalsButton = document.querySelector('[data-equals]')
let previousOperandTextEl = document.querySelector('[data-previous-operand]')
let currentOperandTextEl = document.querySelector('[data-current-operand]')

// let currentOperator = ''
// let firstOperand = ''
// let secondOperand = ''


appendNumber = (number) => {
    currentOperandTextEl.innerText = currentOperandTextEl.innerText += number
}

chooseOperator = (operator) => {
    previousOperandTextEl.innerText = currentOperandTextEl.innerText += operator
    currentOperandTextEl.innerText = ''
    // currentOperator = operator
}

allClear = () => {
    console.log('hey')
}


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
})

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText)
    })
})

allClearButton.addEventListener('click', () => {
    allClear()
})


// //OPERATORS
// let add = (a, b) => {
//     return a + b
//     console.log()
// } 

// let subtract = (a, b) => {
//     return a - b 
// } 

// let multiply = (a, b) => {
//     return a * b
// } 

// let divide = (a, b) => {
//     return a / b
// } 

// let operate = (operator, a, b) => {
//     if (operator === add) {return add(a,b)}
//     if (operator === subtract) {return subtract(a,b)}
//     if (operator === multiply) {return multiply(a,b)}
//     if (operator === divide) {return divide(a,b)}
// }

