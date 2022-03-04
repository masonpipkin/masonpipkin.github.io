function add() 
{
    let num1 = document.getElementById("firstnum").value;
    let num2 = document.getElementById("secondnum").value;
    let output = num1+num2;
    document.getElementById("output").innerHTML = "The answer is: " + output;
}

function subtract() 
{
    let num1 = document.getElementById("firstnum").value;
    let num2 = document.getElementById("secondnum").value;
    let output = num1-num2;
    document.getElementById("output").innerHTML = "The answer is: " + output;
}

function multiply() 
{
    let num1 = document.getElementById("firstnum").value;
    let num2 = document.getElementById("secondnum").value;
    let output = num1*num2;
    document.getElementById("output").innerHTML = "The answer is: " + output;
}

function divide() 
{
    let num1 = document.getElementById("firstnum").value;
    let num2 = document.getElementById("secondnum").value;
    let output = num1/num2;
    document.getElementById("output").innerHTML = "The answer is: " + output;
}