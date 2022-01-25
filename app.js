let currentOperator = ''
let firstOperand = ''
let secondOperand = ''

let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-ac]')
let deleteButton = document.querySelector('[data-del]')
let equalsButton = document.querySelector('[data-equals]')
let decimalButton = document.querySelector('[data-decimal]')
let previousOperandTextEl = document.querySelector('[data-previous-operand]')
let currentOperandTextEl = document.querySelector('[data-current-operand]')

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

equalsButton.addEventListener('click', () => equals())
decimalButton.addEventListener('click', () => appendDecimal())
allClearButton.addEventListener('click', () => allClear())
deleteButton.addEventListener('click', () => deleteNumber())
window.addEventListener('keydown', (e) => handleKeyboardInput(e))

appendNumber = (number) => {
    if (currentOperandTextEl.innerText.length > 10) return
    if (currentOperandTextEl.innerText === '' && number === '0') return
    currentOperandTextEl.innerText = currentOperandTextEl.innerText += number
    
    
    //comma logic ???
    // currentOperandTextEl.innerText = parseFloat(currentOperandTextEl.innerText.replace(/,/g, ''));
    // currentOperandTextEl.innerText = Number(currentOperandTextEl.innerText).toLocaleString()
    
}

chooseOperator = (operator) => {
    if (currentOperandTextEl.innerText == '') return
    firstOperand = currentOperandTextEl.innerText
    currentOperator = operator
    previousOperandTextEl.innerText = `${firstOperand} ${currentOperator}`
    currentOperandTextEl.innerText = ''
}

equals = () => {
    // repeat operation
    if (previousOperandTextEl.innerText == '') {
        firstOperand = currentOperandTextEl.innerText
        operate(currentOperator, firstOperand, secondOperand)
        // normal operation
    } else {
        secondOperand = currentOperandTextEl.innerText
        resetDisplays()
        operate(currentOperator, firstOperand, secondOperand)
    }
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

allClear = () => {
    currentOperator = ''
    firstOperand = ''
    secondOperand = ''
    resetDisplays()
}

resetDisplays = () => {
    previousOperandTextEl.innerText = ''
    currentOperandTextEl.innerText = ''
}

deleteNumber = () => currentOperandTextEl.innerText = currentOperandTextEl.innerText.slice(0, -1)

//OPERATORS
add = (a, b) => {
    currentOperandTextEl.innerText = a + b
} 

subtract = (a, b) => {
    currentOperandTextEl.innerText = a - b 
} 

multiply = (a, b) => {
    currentOperandTextEl.innerText = a * b
} 

divide = (a, b) => {
    currentOperandTextEl.innerText = a / b
} 
handleKeyboardInput = (e) => {
    console.log(e.key)
    if (e.key <= 9 && e.key >= 0) appendNumber(e.key)
    if (e.key === '.') appendDecimal()
    if (e.key === 'Enter' || e.key === '=') equals()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') allClear()
    if (e.key === '+' || e.key === '-' || e.key === '*') chooseOperator(e.key)
    if (e.key === '/') chooseOperator('÷')
  }

operate = (operator, a, b) => {
    a = Number(a)
    b = Number(b)
    if (operator === '+') {return add(a,b)}
    if (operator === '-') {return subtract(a,b)}
    if (operator === '*') {return multiply(a,b)}
    if (operator === '÷') {return divide(a,b)}
    
}

//console.log for testing data!!!
// console.log(`${currentOperator} this is currentOperator`)
// console.log(`${firstOperand} this is firstOperand`)
// console.log(`${secondOperand} this is secondOperand`)

