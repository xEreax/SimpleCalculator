//This displays a number or symbol on the calc screen
function display(btnElement){
    var exp = btnElement.innerText;
    var displayText = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = displayText + exp;
}

//Checks whether input is able to be evaluated. If yes, evaluate
//Note: Needs reiewing
function evaluateExpression(){
    var exp = document.getElementById("calcDisplay").value;
    if(exp == ""){
        return "";
    }
    else if(checkExpression(exp)){
        return eval(exp);
    }
    return "invalid";
  
}

//Checks bracketing and if expression is formulated properly with regEx
function checkExpression(exp){
    if(isBalanced(exp)){
        var reg = /\d+([\+\-\*\/]\d+)*/;
        if(reg.test(exp)){
            return true;
        }
    }
    return false;
}

//Checks if brackets are balanced
function isBalanced(exp){
    var bracketStack = [];
    for (var i of exp){
        if(i == "("){
            bracketStack.push(i);
        }
        else if(i == ")"){
            if(bracketStack.length == 0){
                return false;
            }
            bracketStack.pop();
        }
    }
    if(bracketStack.length > 0){
        return false;
    }
    return true;
}

//Calls functcion for expression eval
function showResult(){
    document.getElementById("calcDisplay").value = evaluateExpression();
}

//clears display
function clearText(){
    document.getElementById("calcDisplay").value = "";
}





    
