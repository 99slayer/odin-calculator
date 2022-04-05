const runningArray = [];
const inputArray = [];
let gettingNumber;
let calcDisplay = document.querySelector('.calcDisplay');


function getInput(x){
    //Finalizing number/clearing array and switching to operator selection
    if(isNaN(x)&&gettingNumber==true){
        console.log('number has been finalized and array has been cleared!')
        gettingNumber = false;
        inputArray.push(runningArray.join(''));
        clearArray();
        refreshDisplay(runningArray);
    }
    //Selecting operator
    if(isNaN(x)){
        if(inputArray.length==0){
            return;
        };
        console.log('operator pushed to running array!')
        runningArray.push(x);
        refreshDisplay(runningArray[runningArray.length-1]);
    }
    //Finalizing operator/clearing array and switching to number selection
    if(!(isNaN(x))&&gettingNumber==false){
        console.log('operator has been finalized and array has been cleared!')
        gettingNumber = true;
        inputArray.push(runningArray[runningArray.length-1])
        clearArray();
        refreshDisplay(runningArray);
    }
    //Selecting number(s)
    if(!(isNaN(x))){
        if(isNaN(runningArray[0])){
            clearArray();
        };
        gettingNumber = true;
        console.log('number pushed to running array!')
        runningArray.push(x);
        refreshDisplay(runningArray.join(''));
    }
    console.log(runningArray,inputArray,gettingNumber);
};
function clearArray(){
    for(let i = runningArray.length-1;i>=0;--i){
        runningArray.pop();
    };
};
function refreshDisplay(x){
    calcDisplay.textContent = x;
};
// function getValue(x){
//     checkArray('checkOperator');
//     runningArray.push(x);
// };
// function getOperator(x){
//     checkArray('checkValue');
//     runningArray.push(x);
// };
// function checkArray(x){
//     if(runningArray.length==0){
//         return;
//     }
//     else{
//         if(x=='checkOperator'){
//             finalizeOperator();
//             clearArray(runningArray);
//         }
//         else if(x=='checkValue'){
//             finalizeValue()
//             clearArray(runningArray);
//         }
//         else{
//             return;
//         };
//     };
// };
// function finalizeValue(){
//     inputArray.push(runningArray.join(''));
// };
// function finalizeOperator(){
//     inputArray.push(runningArray[runningArray.length-1]);
// }
// function display(){

// };

// function getValue(x){
//     if(operator!==''){
//         value2.push(x);
//         console.log(value1,value2,operator);
//     }
//     else{
//         value1.push(x);
//         console.log(value1,value2,operator);
//     }
//     refreshDisplay();
// };
// function getOperator(x){

//     operator = x;
//     console.log(value1,value2,operator);
//     refreshDisplay();
// };
// function refreshDisplay(){
//     let display = [...value1,...operator,...value2];
//     calcDisplay.textContent = display.join('');
//     console.log(display);
// };
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