let persons = [];
let salaries = [];

let salaryData = {
    "Mysta Rias": 50000,
    "Kotoka Torahime": 60000,
    "Gonpachiro Kamaboko": 55000,
    "Retsuko": 70000
};


for (let person in salaryData) {
    persons.push(person);
    salaries.push(salaryData[person]);
}


function displayResults() {
    // calculate average salary
    let totalSalary = 0;
    for (let salary of salaries) {
        totalSalary += salary;
    }
    let averageSalary = totalSalary / salaries.length;

    // calculate highest salary
    let highestSalary = Math.max(...salaries);

    // display results
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 
    `<h2>Results</h2>
    <p>Highest Salary: ${highestSalary}</p>
    <p>Average Salary: ${averageSalary.toFixed(2)}</p>`;
}


function displaySalary() {
    let resultsTable = document.getElementById('results_table');
    resultsTable.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
        resultsTable.innerHTML += `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
    }
}

// add new person and salary to the arrays
function addSalary() {

    let selectedEmployee = document.getElementById('dropdown').value;
    let newEmployee = document.getElementById('newEmployee').value;

    let employeeToAdd = newEmployee.trim() !== '' ? newEmployee : selectedEmployee;

    let salaryInput = document.getElementById('newSalary').value;

    if (salaryInput === null || salaryInput === '') {
        alert('entry must not be empty');
        return;
    }

    let salary = parseFloat(salaryInput);

    if (isNaN(salary)) {
        alert('please enter a numeric value');
        return;
    }

    // adds the employee/salary to the arrays
    persons.push(employeeToAdd);
    salaries.push(salary);

    // updates the dropdown list
    let dropdown = document.getElementById('dropdown');
    let newOption = document.createElement('option');
    newOption.text = employeeToAdd;
    dropdown.add(newOption);

    displaySalary();

    document.getElementById('dropdown').focus();
}

// displays salary of selected employee from the dropdown
function displaySelectedSalary() {
    let selectedEmployee = document.getElementById('dropdown').value;

    let index = persons.indexOf(selectedEmployee);

    if (index !== -1) {
        let selectedSalary = salaries[index];
    

        // Update the salary table with the selected employee's information
        let resultsTable = document.getElementById('results_table');
        resultsTable.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
        resultsTable.innerHTML += `<tr><td>${selectedEmployee}</td><td>${selectedSalary}</td></tr>`;
    } 
}


window.onload = function () {
    document.getElementById('dropdown').focus();
};
