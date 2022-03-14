window.onload = function () {
    document.getElementById("add").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee_name").focus();
};

var employee = [];
var salary = [];

function addSalary(){
    let value = parseFloat(document.getElementById("salary").value);
    let name = document.getElementById("employee_name").value;
    if(value == "" || isNaN(value)){
        alert("Your value for salary is invalid. Please try again.");
        enteredSalary = "";
        document.getElementById("employee_name").focus();
    }
    else{
        employee.push(name);
        salary.push(value);
        document.getElementById("salary").value = "";
        document.getElementById("employee_name").focus();
    } 
}

function displayResults(){
    let highestPaid = null;
    let avg = 0;
    let total = 0;
    let max = 0;
    for (var i = 0; i < salary.length; i++) {
        total += salary[i];
    }

    avg = (total / salary.length);

    for (var i = 0; i < salary.length; i++) {
        if (salary[i] > max) {
            max = salary[i];
            highestPaid = employee[i];
        }
    }
    document.getElementById("results").innerHTML = "Average salary is $" + avg + ". " + max + " is the highest salary paid to " + highestPaid + "<br>"
    + "The total for all salaries is: " + total;

}

function displaySalary(){
    let table = '<table class="center"<tr><td>Employee</td><td>Salary</td></tr>'

    for (var i = 0; i < salary.length; i++) {
        table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>"
    }

    table += "</table>"

    document.getElementById("results_table").innerHTML = table;
}

