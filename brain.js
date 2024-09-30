let add = (a, b) => a + b;
console.log(add(3, 4));

let subtract = (a, b) => a - b;
console.log(subtract(5, 2));

let multiply = (a, b) => a * b;
console.log(multiply(6, 8));

let divide = (a, b) => a / b;
console.log(divide(12, 3));

//non uso if..else perché troppe opzioni
function operate(num1, num2, operation) {
    let result = 0;
    switch(operation) {
        case '+': result = add(num1, num2);
        break;
        case '-': result = subtract(num1, num2);
        break;
        case '*': result = multiply(num1, num2);
        break;
        case '/': result = divide(num1, num2);
        break;
    }
    return Math.round(result * 10e10) / 10e10;
    /*interessantissimo!! è un modo per arrotondare a 
    10 cifre decimali il risultato.*/
}

let displayContent = "";
const display = document.querySelector('#display');
let firstNum;
let secondNum;
let operator;

const numberButtons = document.querySelector('.buttons');
numberButtons.addEventListener('click', (e) => {
    const target = e.target;
    switch(target.className) {
        case 'digit':
            if(displayContent.length >= 12 || (displayContent && target.textContent === '0' &&
               displayContent.split("").every(e => e === '0'))) return;
            displayContent += target.textContent;
            display.textContent = displayContent;
            break;
            }
        }
    )
