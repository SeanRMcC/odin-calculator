function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    if(second === 0){
        return "ERROR";
    }
    return parseFloat((first / second).toFixed(2));
}


/*
    Will have attributes:
    firstNum: the "left side" of the operation
    operator: a single character string, either + - * /
    secondNum: the "right side" of the operation
*/
let math = {};

function operate(num1, num2, operator){
    if(operator === "+"){
        return add(num1, num2);
    }else if(operator === "-"){
        return subtract(num1, num2);
    }else if(operator === "*"){
        return multiply(num1, num2);
    }else if(operator === "/"){
        return divide(num1, num2);
    }
}

const bottomDisplay = document.querySelector(".bottom");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const enter = document.querySelector("#enter");
const clear = document.querySelector("#clear");

let operatorClicked = false;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(operatorClicked){
            bottomDisplay.textContent = button.textContent;
            operatorClicked = false;
        }else if(bottomDisplay.textContent === "0"){
            bottomDisplay.textContent = button.textContent;
        }else{
            bottomDisplay.textContent += button.textContent;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () =>{
        math.firstNum = parseFloat(bottomDisplay.textContent);
        math.operator = button.textContent;
        operatorClicked = true;
    });
});

enter.addEventListener("click", () => {
    math.secondNum = parseFloat(bottomDisplay.textContent);
    const result = operate(math.firstNum, math.secondNum, math.operator);
    if(result === "ERROR"){
        erase();
        alert("Can't divide by zero dummy!")
    }else{
        bottomDisplay.textContent = result;
    }
});

clear.addEventListener("click", () => {
    erase();
});

function erase(){
    bottomDisplay.textContent = "0";
    delete math.firstNum;
    delete math.operator;
    delete math.secondNum;
}