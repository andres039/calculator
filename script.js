const add = (x, y) => (x + y);
const subtract = (x, y) => (x - y);
const multiply = (x, y) => (x * y);
const divide = (x, y) => (y === 0) ? 'Dividing by 0?...' : (x / y);
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
const keys = [...document.querySelectorAll(".keys")]
const display = document.querySelector('#display')
keys.forEach(key => {
  if (key.innerText === '=' || key.innerText === 'A/C') {} else {
  key.addEventListener('click', updateDisplay)
  }
})
function updateDisplay (event) {
  if (display.innerText === '0') {
  display.innerText = event.target.innerText
  } else {
    display.innerText += event.target.innerText
  }
 }
function clearAll () {
  display.innerText = 0;
  clickCounter = 0;
}
let clear = document.querySelector('#clear')
clear.addEventListener('click', clearAll)
function defineOperation () {
  let stringToOperate = display.innerText
  let arrayToWork = [...stringToOperate]
  let sign = arrayToWork.filter(x => x === '+' || x === '-' || x === '*' ||x === '/')
  let signIndex = arrayToWork.indexOf(sign[0])
  let firstNumber = stringToOperate.slice(0, signIndex);
  let secondNumber = stringToOperate.slice(signIndex + 1, stringToOperate.length)
  display.innerText = operate(+firstNumber, sign[0], +secondNumber)
  firstNumber = display.innerText
  }
let equal = document.querySelector('#equal')
equal.addEventListener('click', defineOperation)
let operator = [...document.querySelectorAll('.operators')]
operator.forEach(operator => operator.addEventListener('click', operatorClick))
let clickCounter = 0
function operatorClick (e) {
  if (clickCounter === 0) {
    clickCounter++
    console.log(clickCounter)
 } else if (clickCounter === 1) {
  let stringToOperate = display.innerText.substring(0, display.innerText.length - 1)
  let arrayToWork = [...stringToOperate]
  let sign = arrayToWork.filter(x => x === '+' || x === '-' || x === '*' ||x === '/')
  let signIndex = arrayToWork.indexOf(sign[0])
  let firstNumber = stringToOperate.slice(0, signIndex)
  let secondNumber = stringToOperate.slice(signIndex + 1, stringToOperate.length)
  display.innerText = operate(+firstNumber, sign[0], +secondNumber) + e.target.innerText
  firstNumber = display.innerText
 }
}





/*
[] get the operators
[] if they were pressed once already, trigger defineOperation
-add a counter to veify this
*/ 
