const inquirer = require("inquirer");
const queries = require("./queries");
const choices = require("./choices");


console.log(`
:::  :::    :::::::      :::    :::    ::::::::
:::  :::      :::        ::::  ::::    :::
::::::::      :::        ::: :: :::    ::::::::
:::  :::      :::        :::    :::         :::
:::  ::: :: :::::::  ::  :::    ::: :: :::::::: `)

function initialQuestion() {

    inquirer
        .prompt([{
            type: "list",
            name: "action",
            message: "Choose an action",
            choices: choices.main
        }]).then(answer => {
            //console.log(answer.action);
            switch (answer.action) {
                case "Quit":
                    console.log("Good bye!");
                    queries.connect.end();
                    return false;
                    break;
                case "View records":
                    inquirer
                        .prompt([{
                            type: "list",
                            name: "view",
                            message: "Select what to view",
                            choices: choices.view
                        }]).then(answer => {
                            //console.log(answer.view);
                            switch (answer.view) {
                                case "View all employees":
                                    queries.viewAll("employee").then(initialQuestion());
                                    break;
                                case "View all roles":
                                    queries.viewAll("role").then(initialQuestion());
                                    break;
                                case "View all departments":
                                    queries.viewAll("department").then(initialQuestion());
                                    break;
                                case "View employees by manager":
                                    queries.managers().then(initialQuestion());
                                    break;
                                case "View total utilized budget":
                                    queries.budget().then(initialQuestion());
                                    break;
                            }
                        })
                    break;
                case "Add records":
                    inquirer
                        .prompt([{
                            type: "list",
                            name: "add",
                            message: "Select what to add",
                            choices: choices.add
                        }]).then(answer => {
                            switch (answer.add) {
                                case "Add employee":
                                    queries.addEmployee();
                                    break;
                                case "Add department":
                                    queries.addDepartment().then(initialQuestion());
                                    break;
                                case "Add role":
                                    queries.addRole().then(initialQuestion());
                                    break;
                            }
                        })
                    break;
                case "Update records":
                    queries.updateEmployee().then(initialQuestion());
                    break;
            }
        })
};

initialQuestion();

module.exports = initialQuestion();