const value1 = [];
const value2 = [];
let operator = undefined;
let calcDisplay = document.querySelector('.calcDisplay');

function getValue(x){
    if(operator!==undefined){
        value2.push(x);
        calcDisplay.textContent = `${value2.join('')}`;
        console.log(value1,value2,operator);
    }
    else{
        value1.push(x);
        calcDisplay.textContent = `${value1.join('')}`;
        console.log(value1,value2,operator);
    }
};
function getOperator(x){
    operator = x;
    calcDisplay.textContent = x;
    console.log(value1,value2,operator);
};
function operate(o,a,b){
    if(o==add){
        return add(a,b);
    }
    else if(o==subtract){
        return subtract(a,b);
    }
    else if(o==multiply){
        return multiply(a,b);
    }
    else if(o==divide){
        return divide(a,b);
    }
    else{
        return;
    };
};
function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};