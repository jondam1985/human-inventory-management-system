const mysql = require("mysql");
const table = require("console.table");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
        user: "root",
        host: "localhost",
        port: 3306,
        password: "",
        database: "hr_management"
    },
)

connection.connect(function(err, res) {
    if (err) throw err;
    console.log(`Connected to thread ID: ${connection.threadId}`);
})

module.exports = {

    connectionString: {
        user: "root",
        host: "localhost",
        port: 3306,
        password: "",
        database: "hr_management"
    },

    connect: connection,

    viewAll: function viewAll(table) {
        return new Promise((resolve, reject) => {
        //var connection = mysql.createConnection(this.connectionString);
        connection.query(`SELECT * from ${table}`, function (err, result) {
            if (err) throw err.stack;
            if (resolve) {
            console.table(result);
        }
            //connection.end();
        })
    })
    },

    managers: function managers() {
        return new Promise ((reject, resolve) => {
        //var connection = mysql.createConnection(this.connectionString);
        connection.query("select distinct manager_id from employee where manager_id is not null", function (error, result) {
            if (error) { error.stack };
            let managersArr = [];
            for (const i in result) {
                managersArr.push(result[i].manager_id);
            }
            inquirer.prompt([{
                type: "list",
                name: "manager",
                message: "choose a manager",
                choices: managersArr
            }]).then(answer => {
                connection.query(`SELECT * FROM employee where manager_id = ${answer.manager}`, function (err, result) {
                    if (err) throw err;
                    if (resolve) {
                    console.table(result);
                }
                })
                //connection.end();
            })
        })
    })

    },

    budget: function budget() {
        return new Promise (function(reject, resolve) {
        //var connection = mysql.createConnection(this.connectionString);
        connection.query(`select sum(salary) as utilized_budget from role inner join employee on role.id = employee.role_id`, function (err, result) {
            if (err) throw err;
            if (resolve) {
            console.table(result);
        }
        })
        //connection.end();
    })
    },

    addEmployee: function addEmployee() {
        return new Promise ((resolve, reject) => {
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "enter employee ID",
                default: 001
            },
            {
                type: "input",
                name: "fName",
                message: "enter employee's first name",
                default: "John"
            },
            {
                type: "input",
                name: "lName",
                message: "enter employee's last name",
                default: "Doe"
            },
            {
                type: "input",
                name: "role",
                message: "enter employee's role ID",
                default: 001
            },
            {
                type: "input",
                name: "manager",
                message: "enter employee's manager's ID",
                default: 001
            }
        ]).then(answer => {
            //var connection = mysql.createConnection(this.connectionString);
            connection.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (${answer.id}, '${answer.fName}', '${answer.lName}', ${answer.role}, ${answer.manager})`, function (err, result) {
                if (err) throw err;
                if (resolve) {
                console.table(result);
            }
            })
            //connection.end();
        })
    })
    },
    addDepartment: function addDepartment() {
        return new Promise((reject, resolve) => {
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "enter deparment ID",
                default: 001
            },
            {
                type: "input",
                name: "name",
                message: "enter department's name",
                default: "Placeholder"
            }
        ]).then(answer => {
            //var connection = mysql.createConnection(this.connectionString);
            connection.query(`INSERT INTO department (id, name) values (${answer.id}, '${answer.name}')`, function (err, result) {
                if (err) throw err;
                if (resolve) {
                console.table(result);
            }
            })
            //connection.end();
        })
    })
    },

    addRole: function addRole() {
        return new Promise((reject, resolve) => {
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "enter role ID",
                default: 001
            },
            {
                type: "input",
                name: "title",
                message: "enter roles's title",
                default: "Placeholder"
            },
            {
                type: "input",
                name: "salary",
                message: "enter roles's salary",
                default: 1
            },
            {
                type: "input",
                name: "department",
                message: "enter roles's department's id",
                default: 001
            }
        ]).then(answer => {
            //var connection = mysql.createConnection(this.connectionString);
            connection.query(`INSERT INTO role (id, title, salary, department_id) values (${answer.id}, '${answer.title}', ${answer.salary}, ${answer.department})`, function (err, result) {
                if (err) throw err;
                if (resolve) {
                console.table(result);
            }
            })
            //connection.end();
        })
    })
    },

    updateEmployee: function updateEmployee() {
        return new Promise ((reject, resolve) => {
        //var connection = mysql.createConnection(this.connectionString);
        connection.query(`SELECT * from employee`, function (err, result) {
            if (err) throw err;
            let employeeArr = [];
            for (const i in result) {
                employeeArr.push(`ID: ${result[i].id} Name: ${result[i].first_name} ${result[i].last_name} Current role: ${result[i].role_id}`);
            }
            inquirer.prompt([{
                type: "list",
                name: "employee",
                message: "select employee to update",
                choices: employeeArr
            }]).then(answer => {
                for (const i in employeeArr) {
                    if (answer.employee == employeeArr[i]) {
                        let employeeId = result[i].id;
                        inquirer.prompt([{
                            type: "input",
                            name: "newRole",
                            message: "enter new role",
                            default: "1"
                        }]).then(answer => {
                            connection.query(`update employee set role_id = ${answer.newRole} where id = ${employeeId}`, function(err, result) {
                                if (err) throw err;
                                if (resolve) {
                                    console.table(result);
                                }
                            });
                        })
                        //connection.end();
                    }
                }
            })
        })
        })
    }
}

