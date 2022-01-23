//QUERY SELECTORS
let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-ac]')
let deleteButton = document.querySelector('[data-del]')
let equalsButton = document.querySelector('[data-equals]')
let decimalButton = document.querySelector('[data-decimal]')
let previousOperandTextEl = document.querySelector('[data-previous-operand]')
let currentOperandTextEl = document.querySelector('[data-current-operand]')

let currentOperator = ''
let firstOperand = ''
let secondOperand = ''


appendNumber = (number) => {
    if (currentOperandTextEl.innerText.length > 10) return
    if (currentOperandTextEl.innerText === '' && number === '0') return
    currentOperandTextEl.innerText = currentOperandTextEl.innerText += number

    //comma logic ???
    currentOperandTextEl.innerText = parseFloat(currentOperandTextEl.innerText.replace(/,/g, ''));
    currentOperandTextEl.innerText = Number(currentOperandTextEl.innerText).toLocaleString()
 
}

appendDecimal = () => {
    if (currentOperandTextEl.innerText === '') { 
        currentOperandTextEl.innerText = '0.'
    } else if (currentOperandTextEl.innerText.includes('.')) {
        return
    } else {
        currentOperandTextEl.innerText = currentOperandTextEl.innerText += '.'
    }
}

chooseOperator = (operator) => {
    firstOperand = currentOperandTextEl.innerText
    currentOperator = operator
    previousOperandTextEl.innerText = `${firstOperand} ${currentOperator}`
    currentOperandTextEl.innerText = ''
}

resetDisplays = () => {
    previousOperandTextEl.innerText = ''
    currentOperandTextEl.innerText = ''
}

allClear = () => {
    currentOperator = ''
    firstOperand = ''
    secondOperand = ''
    previousOperandTextEl.innerText = ''
    currentOperandTextEl.innerText = ''
}

deleteNumber = () => {
    currentOperandTextEl.innerText = currentOperandTextEl.innerText.slice(0, -1)
}

equals = (results) => {
    secondOperand = currentOperandTextEl.innerText
    operate(currentOperator, firstOperand, secondOperand)
    resetDisplays()
    currentOperandTextEl.innerText = firstOperand
}


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
})

decimalButton.addEventListener('click', () => appendDecimal())

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
    deleteNumber()
})
//console.log button for testing data!!!

//OPERATORS
let add = (a, b) => {
    firstOperand = a + b
} 

let subtract = (a, b) => {
    firstOperand = a - b 
} 

let multiply = (a, b) => {
    firstOperand = a * b
} 

let divide = (a, b) => {
    firstOperand = a / b
} 

let operate = (operator, a, b) => {
    a = Number(a)
    b = Number(b)
    if (operator === '+') {return add(a,b)}
    if (operator === '-') {return subtract(a,b)}
    if (operator === '*') {return multiply(a,b)}
    if (operator === '÷') {return divide(a,b)}

}

