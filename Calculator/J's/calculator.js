let firstNumber = "0";
let secondNumber = "";
let operator = "";

//update the number display
function appendNumber(num) {
    if (operator === "") {
        if (firstNumber === "0" && num !== ".") {
            firstNumber = num;
        } else {
            firstNumber += num;
        }
        document.getElementById("valueBox").value = firstNumber;
    } else {
        if (secondNumber === "0" && num !== ".") {
            secondNumber = num;
        } else {
            secondNumber += num;
        }
        document.getElementById("valueBox").value = secondNumber;
    }
}

function setOperator(op) {
    if (firstNumber === "") return;

    operator = op;
    document.getElementById("operatorBox").value = operator;

    
    document.getElementById("valueBox").value = "0";

    
    if (secondNumber !== "") {
        secondNumber = "";
    }
}

function calculate() {
    if (operator === "" || secondNumber === "") return;

    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b === 0 ? "Error" : a / b;
            break;
    }

    document.getElementById("valueBox").value = result;

    // reset but keep result
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    document.getElementById("operatorBox").value = "";
}

function clearAll() {
    firstNumber = "0";
    secondNumber = "";
    operator = "";
    document.getElementById("valueBox").value = "0";
    document.getElementById("operatorBox").value = "";
}

function backspace() {
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        if (firstNumber === "") firstNumber = "0";
        document.getElementById("valueBox").value = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        document.getElementById("valueBox").value = secondNumber || "0";
    }
}