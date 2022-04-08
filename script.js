const runningArray = [];
const inputArray = [];
let numberArray = [];
let operatorArray = [];
let holdFinal;
let gettingNumber;
let calcDisplay = document.querySelector('.calcDisplay');

function calculate(){
    const checkForOperator = inputArray.some((element)=>{
        return isNaN(element);
    });
    //returns if user tries to calculate with no operators
    if(checkForOperator==false){
        return;
    };
    //wont allow user to calculate with a 'hanging' operator
    if(isNaN(runningArray[runningArray.length-1])){
        clearArray(runningArray);
    };
    inputArray.push(runningArray.join(''));
    // if(inputArray.length<3){
    //     refreshDisplay('please input more.')
    //     return;
    // };
    getNumberArray();
    getOperatorArray();
    let finalValue = numberArray[0];
    for(let i = operatorArray.length,x = 0;i>0;--i,++x){
        if((finalValue==0||numberArray[x+1]==0)&&operatorArray[x]=='/'){
            refreshDisplay('I\' afraid I can\t do that, Dave.');
            setTimeout(clearCalc,2000);
            return;
        };
        finalValue = operate(finalValue,numberArray[x+1],operatorArray[x])
    }
    //only shows decimal values if there are any
    if(finalValue%1!==0){
        finalValue = Number.parseFloat(finalValue).toFixed(2);
    };
    refreshDisplay(finalValue);
    holdFinal = finalValue;
    console.log('Calculated.')
    console.log('runningArray:',runningArray,'inputArray',inputArray,'gettingNumber variable',gettingNumber);
    console.log('finalValue:',finalValue);
    console.log('holdFinal',holdFinal);
};

function clearCalc(){
    const Arrays = [runningArray,inputArray,numberArray,operatorArray];
    Arrays.forEach(clearArray);
    holdFinal = undefined;
    gettingNumber = undefined;
    refreshDisplay('DISPLAY');
    console.log('Calculator cleared.');
    console.log(runningArray,inputArray,numberArray,operatorArray);
    console.log(holdFinal,gettingNumber);
};
function getNumberArray(){
    numberArray = inputArray.filter((arrayElement)=>{
        if(isNaN(arrayElement)){
            return false;
        }
        else{
            return true;
        }
    });
};
function getOperatorArray(){
    operatorArray = inputArray.filter((arrayElement)=>{
        if(!(isNaN(arrayElement))){
            return false;
        }
        else{
            return true;
        }
    });
};

function getInput(x){
    //Finalizing number/clearing array and switching to operator selection
    if(isNaN(x)&&gettingNumber==true){
        gettingNumber = false;
        inputArray.push(runningArray.join(''));
        clearArray(runningArray);
        refreshDisplay(runningArray);
    }
    //Selecting operator
    if(isNaN(x)){
        if(inputArray.length==0){
            return;
        };
        if(holdFinal!==undefined){
            let finalToInput = holdFinal;
            clearCalc();
            inputArray.push(finalToInput);
            gettingNumber = false;
        };
        runningArray.push(x);
        refreshDisplay(runningArray[runningArray.length-1]);
    }
    //Finalizing operator/clearing array and switching to number selection
    if(!(isNaN(x))&&gettingNumber==false){
        gettingNumber = true;
        inputArray.push(runningArray[runningArray.length-1])
        clearArray(runningArray);
        refreshDisplay(runningArray);
    }
    //Selecting number(s)
    if(!(isNaN(x))){
        if(isNaN(runningArray[0])){
            clearArray(runningArray);
        };
        if(holdFinal!==undefined){
            clearCalc();
        };
        gettingNumber = true;
        runningArray.push(x);
        refreshDisplay(runningArray.join(''));
    }
    console.log('Getting input.');
    console.log('runningArray:',runningArray,'inputArray',inputArray,'gettingNumber variable',gettingNumber);
};

function clearArray(x){
    for(let i = x.length-1;i>=0;--i){
        x.pop();
    };
};
function refreshDisplay(x){
    calcDisplay.textContent = x;
};

function operate(value1,value2,operator){
    if(operator=='+'){
        return add(value1,value2);
    }
    else if(operator=='-'){
        return subtract(value1,value2);
    }
    else if(operator=='*'){
        return multiply(value1,value2);
    }
    else if(operator=='/'){
        return divide(value1,value2);
    }
    else{
        return;
    };
};
function add(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
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