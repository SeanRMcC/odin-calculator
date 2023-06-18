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

let storedNumbers = {};

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

const topDisplay = document.querySelector(".top");
const bottomDisplay = document.querySelector(".bottom");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const enter = document.querySelector("#enter");
const clear = document.querySelector("#clear");