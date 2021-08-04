const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = (operator, x, y) =>
  operator === "+"
    ? add(x, y)
    : operator === "-"
    ? subtract(x, y)
    : operator === "*"
    ? multiply(x, y)
    : divide(x, y);
