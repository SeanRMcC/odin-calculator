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