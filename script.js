const value1 = [];
const value2 = [];
let operator = '';
let calcDisplay = document.querySelector('.calcDisplay');

function getValue(x){
    if(operator!==''){
        value2.push(x);
        console.log(value1,value2,operator);
    }
    else{
        value1.push(x);
        console.log(value1,value2,operator);
    }
    refreshDisplay();
};
function getOperator(x){
    operator = x;
    console.log(value1,value2,operator);
    refreshDisplay();
};
function refreshDisplay(){
    let display = [...value1,...operator,...value2];
    calcDisplay.textContent = display.join('');
    console.log(display);
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