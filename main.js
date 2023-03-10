function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const resultButton = document.querySelector('#result');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');


let firstNumber;
let secondNumber;
let operator = "";
let displayValue = 0;

const display = document.querySelector('.display');
display.textContent = displayValue;

function numberPressed(number) {
    if (operator === "") {
        if (firstNumber !== undefined) { //mar van erteke firstNumbernek
            firstNumber = firstNumber * 10 + number;
        } else { //még undefined
            firstNumber = number;
        }
        displayValue = firstNumber;
        display.textContent = displayValue;
    } else {
        if (secondNumber !== undefined) {
            secondNumber = secondNumber * 10 + number;
        } else {
            secondNumber = number;
        }
        displayValue = firstNumber;
        display.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
}

zero.addEventListener('click', () => {
    console.log(0)
    numberPressed(0);
})

one.addEventListener('click', () => {
    numberPressed(1);
})

two.addEventListener('click', () => {
    numberPressed(2);
})

three.addEventListener('click', () => {
    numberPressed(3);
})

four.addEventListener('click', () => {
    numberPressed(4);
})

five.addEventListener('click', () => {
    numberPressed(5);
})

six.addEventListener('click', () => {
    numberPressed(6);
})

seven.addEventListener('click', () => {
    numberPressed(7);
})

eight.addEventListener('click', () => {
    numberPressed(8);
})

nine.addEventListener('click', () => {
    numberPressed(9);
})

function operatorPresesed(p) {
    if (operator !== "" && secondNumber === undefined) {
        displayValue = String(displayValue).slice(0, -1);
    } else if (operator !== "" && secondNumber !== undefined) {
        runOperate();
    }
    operator = p;
    displayValue += p;
    display.textContent = displayValue;
}

addButton.addEventListener('click', () => {
    operatorPresesed('+')
})

subtractButton.addEventListener('click', () => {
    operatorPresesed('-');
})


multiplyButton.addEventListener('click', () => {
    operatorPresesed('*');
})


divideButton.addEventListener('click', () => {
    operatorPresesed('/');
})

function runOperate() {
    if (operator === "/" && secondNumber === 0) { //zero divison
        firstNumber = undefined;
        displayValue = "ZERO DIV ERROR";
    } else {
        displayValue = operate(operator, firstNumber, secondNumber);
        firstNumber = operate(operator, firstNumber, secondNumber);
    }
    display.textContent = displayValue;
    secondNumber = undefined;
    operator = "";
}

clearButton.addEventListener('click', () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";
    displayValue = 0;
    display.textContent = displayValue;
})

resultButton.addEventListener('click', () => {
   if (firstNumber !== undefined && operator !== "" && secondNumber !== undefined) {
       runOperate();
   }
});

backButton.addEventListener('click', () => {
    if (firstNumber !== undefined && operator !== "" && secondNumber !== undefined) {
        if (secondNumber >= 10) {
            secondNumber = Math.floor((secondNumber - (secondNumber % 10)) / 10);
            displayValue = `${firstNumber}${operator}${secondNumber}`
        } else {
            secondNumber = 0;
            displayValue = `${firstNumber}${operator}`;
        }
    } else if (firstNumber !== undefined && operator !== "" && secondNumber === undefined) {
        operator = "";
        displayValue = firstNumber;
    } else {
        if (firstNumber > 10 ) {
            firstNumber = Math.floor((firstNumber - (firstNumber % 10)) / 10)
        } else {
            firstNumber = 0;
            displayValue = 0;
        }
    }
    display.textContent = displayValue;
});
