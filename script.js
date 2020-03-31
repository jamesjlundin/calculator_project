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
    return first / second;
}

let input = "";

let buttonItems = document.querySelectorAll('.add-item');
buttonItems.forEach((item) => {
    // and for each one we add a 'click' listener
    item.addEventListener("click", function( event ) {   
        onClick(event.target.textContent);
    }, false);
});


function onClick(clicked) {
    input += clicked;
    if(input.indexOf("+") > 0 || input.indexOf("-") > 0 || input.indexOf("/") > 0 || input.indexOf("x") > 0){
        document.querySelector('#plus').disabled = true;
        document.querySelector('#minus').disabled = true;
        document.querySelector('#multiply').disabled = true;
        document.querySelector('#divide').disabled = true;
    }
   
    let inputDisplay = document.querySelector('#displayWindow');
    inputDisplay.textContent = input;
}

document.querySelector('#equals').addEventListener('click', function(e){
    let question = document.querySelector('#displayWindow').textContent;
    let reg = /^[0-9]+[\+, \-, x, \/][0-9]+/g;
    if(reg.test(question)){
        if (question.indexOf("+") > 0){
            let getOperands = question.split("+");
            let firstOperand = parseInt(getOperands[0]);
            let secondOperand = parseInt(getOperands[1]);
            let solution = add(firstOperand, secondOperand);
            if(solution % 1 !== 0){
                document.querySelector('#displayWindow').textContent = solution.toFixed(2);
            } else {
                document.querySelector('#displayWindow').textContent = solution; 
            }
            document.querySelector('#plus').disabled = false;
            document.querySelector('#minus').disabled = false;
            document.querySelector('#multiply').disabled = false;
            document.querySelector('#divide').disabled = false;
            input = "";
        } else if (question.indexOf("-") > 0){
            let getOperands = question.split("-");
            let firstOperand = parseInt(getOperands[0]);
            let secondOperand = parseInt(getOperands[1]);
            let solution = subtract(firstOperand, secondOperand);
            if(solution % 1 !== 0){
                document.querySelector('#displayWindow').textContent = solution.toFixed(2);
            } else {
                document.querySelector('#displayWindow').textContent = solution; 
            }
            
            document.querySelector('#plus').disabled = false;
            document.querySelector('#minus').disabled = false;
            document.querySelector('#multiply').disabled = false;
            document.querySelector('#divide').disabled = false;
            input = "";
        } else if (question.indexOf("/") > 0){
            let getOperands = question.split("/");
            let firstOperand = parseInt(getOperands[0]);
            let secondOperand = parseInt(getOperands[1]);
            let solution = divide(firstOperand, secondOperand);
            if(solution % 1 !== 0){
                document.querySelector('#displayWindow').textContent = solution.toFixed(2);
            } else {
                document.querySelector('#displayWindow').textContent = solution; 
            }
            document.querySelector('#plus').disabled = false;
            document.querySelector('#minus').disabled = false;
            document.querySelector('#multiply').disabled = false;
            document.querySelector('#divide').disabled = false;
            input = "";
        } else if (question.indexOf("x") > 0){
            let getOperands = question.split("x");
            let firstOperand = parseInt(getOperands[0]);
            let secondOperand = parseInt(getOperands[1]);
            let solution = multiply(firstOperand, secondOperand);
            if(solution % 1 !== 0){
                document.querySelector('#displayWindow').textContent = solution.toFixed(2);
            } else {
                document.querySelector('#displayWindow').textContent = solution; 
            }
            document.querySelector('#plus').disabled = false;
            document.querySelector('#minus').disabled = false;
            document.querySelector('#multiply').disabled = false;
            document.querySelector('#divide').disabled = false;
            input = "";
        } else {
            return;
        }
    }
});

document.querySelector('#clear').addEventListener('click', function(e){
    document.querySelector('#displayWindow').textContent = "0";
    input = "";
});