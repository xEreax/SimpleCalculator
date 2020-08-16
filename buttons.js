function display(btnElement){
    var exp = btnElement.innerText;
    var displayText = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = displayText + exp;
}

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

function checkExpression(exp){
    if(isBalanced(exp)){
        var reg = /\d+([\+\-\*\/]\d+)*/;
        if(reg.test(exp)){
            return true;
        }
    }
    return false;
}

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

function showResult(){
    document.getElementById("calcDisplay").value = evaluateExpression();
}

function clearText(){
    document.getElementById("calcDisplay").value = "";
}


/*-----------EXPRESSION FUNCTIONS------------*/




    