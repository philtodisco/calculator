//QUERY SELECTORS
let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-ac]')
let deleteButton = document.querySelector('[data-del]')
let equalsButton = document.querySelector('[data-equals]')
let previousOperandTextEl = document.querySelector('[data-previous-operand]')
let currentOperandTextEl = document.querySelector('[data-current-operand]')

let currentOperator = ''
let firstOperand = ''
let secondOperand = ''


appendNumber = (number) => {
    currentOperandTextEl.innerText = currentOperandTextEl.innerText += number
}

chooseOperator = (operator) => {
    firstOperand = currentOperandTextEl.innerText
    currentOperator = operator
    previousOperandTextEl.innerText = `${firstOperand} ${currentOperator}`
    currentOperandTextEl.innerText = ''
}

allClear = () => {
    previousOperandTextEl.innerText = ''
    currentOperandTextEl.innerText = ''
}

equals = () => {
    secondOperand = currentOperandTextEl.innerText
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

equalsButton.addEventListener('click', () => {
    equals()
})

//console.log button for testing data!!!
deleteButton.addEventListener('click', () => {
    console.log(`${currentOperator} this is currentOperator`)
    console.log(`${firstOperand} this is firstOperand`)
    console.log(`${secondOperand} this is secondOperand`)
})
//console.log button for testing data!!!

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
    if (operator === '+') {return add(a,b)}
    if (operator === '-') {return subtract(a,b)}
    if (operator === '*') {return multiply(a,b)}
    if (operator === '÷') {return divide(a,b)}
}

