const add = (x, y) => (x + y) % 1 != 0 ? (x + y).toFixed(2) : (x + y);
const subtract = (x, y) => (x - y) % 1 != 0 ? (x - y).toFixed(2) : (x - y);
const multiply = (x, y) => (x * y) % 1 != 0 ? (x * y).toFixed(2) : (x * y);
const divide = (x, y) => (y === 0) ? 'Dividing by 0?...' : (x / y) % 1 != 0 ? (x / y).toFixed(2) : (x / y);
//use the 'display value' as the values for the 'operate' function 
const operate = (x, z, y) =>
{   
  if (z === '+') {
    return add(x, y)
}  else if (z === "-") {
    return subtract(x, y)
  } else if (z=== "*") {
    return multiply(x, y)
  }
  else {
    return divide(x, y)
  }
}
window.addEventListener('keydown', updateDisplayKey)
const keys = [...document.querySelectorAll(".keys")]
const display = document.querySelector('#display')
keys.forEach(key => {
  if (key.innerText === '=' || key.innerText === 'A/C' || key.className === 'keys operators') {} else {
  key.addEventListener('click', updateDisplay)
  }
})
function updateDisplay (e) {
  if (operatorClickCounter === 0) {
  if (display.innerText === '0') {
  display.innerText = e.target.innerText 
  } else {
    display.innerText += e.target.innerText
  }
 }
 else {
  if (display.innerText === firstNumber) {
  display.innerText = e.target.innerText
  } else {
    display.innerText += e.target.innerText;
  }
}
}
function updateDisplayKey (e) {
  if (operatorClickCounter === 0) {
  if (display.innerText === '0') {
  display.innerText = e.key
  } else {
    display.innerText += e.key
  }
 }
 else {
  if (display.innerText === firstNumber) {
  display.innerText = e.key
  } else {
    display.innerText += e.key
  }
}
}
 let firstNumber 
 let secondNumber 
 let sign
 let operatorClickCounter = 0
 function assignFirstNumber (e) {
   if (operatorClickCounter === 0) {
   firstNumber = display.innerText
   sign = e.target.innerText
  //  .substring(0, firstDigits.length - 1)
   operatorClickCounter ++
   console.log(firstNumber, operatorClickCounter);
   } else {
   secondNumber = display.innerText
   let result = operate(+firstNumber, sign, +secondNumber)
   display.innerText = result
   firstNumber = display.innerText
   sign = e.target.innerText
   }
 }
 function assignSecondNumber () {
   let firstDigits = display.innerText
   secondNumber = firstDigits
   let result = operate(+firstNumber, sign, +secondNumber)
   display.innerText = result
  }
  
function clearAll () {
  display.innerText = 0;
  operatorClickCounter = 0;
}
let clear = document.querySelector('#clear')
clear.addEventListener('click', clearAll)

let equal = document.querySelector('#equal')
equal.addEventListener('click', assignSecondNumber)
let operator = [...document.querySelectorAll('.operators')]
operator.forEach(operator => operator.addEventListener('click', assignFirstNumber))

