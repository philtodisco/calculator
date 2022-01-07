let numberButtons = document.querySelectorAll('[data-number]')

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
