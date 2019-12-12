const mysql = require("mysql");
const table = require("console.table");


var connection = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3306,
        password: "",
        database: "hr_management"
    }
)

var arrResult = connection.query("select * from employee", function(error, result) {
    if (error) {throw error.name};
    let resArr = [];
    for (const i in result) {
        resArr.push(`ID: ${result[i].id} NAME: ${result[i].first_name} ${result[i].last_name}`);
    }
    console.log(resArr);
    connection.end();
})

console.log(arrResult);