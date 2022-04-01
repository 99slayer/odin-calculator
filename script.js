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
}