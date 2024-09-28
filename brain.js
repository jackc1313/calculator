let add = (a, b) => a + b;
console.log(add(3, 4));

let subtract = (a, b) => a - b;
console.log(subtract(5, 2));

let multiply = (a, b) => a * b;
console.log(multiply(6, 8));

let divide = (a, b) => a / b;
console.log(divide(12, 3));

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
    add(firstNumber, secondNumber);
}