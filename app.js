//QUERY SELECTORS
let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-ac]')
let deleteButton = document.querySelector('[data-del]')
let equalsButton = document.querySelector('[data-equals]')
let previousOperandTextEl = document.querySelector('[data-previous-operand]')
let currentOperandTextEl = document.querySelector('[data-current-operand]')

appendNumber = (number) => {

}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button)
    })
})

//OPERATORS
let add = (a, b) => {
    return a + b
    console.log()
} 

let subtract = (a, b) => {
    return a - b 
} 

let multiply = (a, b) => {
    return a * b
} 

let divide = (a, b) => {
    return a / b
} 

let operate = (operator, a, b) => {
    if (operator === add) {return add(a,b)}
    if (operator === subtract) {return subtract(a,b)}
    if (operator === multiply) {return multiply(a,b)}
    if (operator === divide) {return divide(a,b)}
}

