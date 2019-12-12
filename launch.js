const inquirer = require("inquirer");
const queries = require("./queries");
const choices = require("./choices");

function initialQuestion() {

    console.log(`%c 
    :::  :::    :::::::       :::    :::  :::    :::
    :::  :::    ::: :::       ::::  ::::  :::::  :::
    ::::::::    ::::::        ::: :: :::  ::: :: :::
    :::  :::    :::  :::      :::    :::  :::  :::::
    :::  ::: :: :::  ::: ::   :::    :::  :::    ::: `)

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
                    return false;
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
                                    queries.viewAll("employee");
                                    break;
                                case "View all roles":
                                    queries.viewAll("role");
                                    break;
                                case "View all departments":
                                    queries.viewAll("department");
                                    break;
                                case "View employees by manager":
                                    queries.managers();
                                    break;
                                case "View total utilized budget":
                                    queries.budget();
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
                                    queries.addDepartment();
                                    break;
                                case "Add role":
                                    queries.addRole();
                                    break;
                            }
                        })
                    break;
                case "Update records":
                    queries.updateEmployee();
                    break;
            }
        })
};

initialQuestion();