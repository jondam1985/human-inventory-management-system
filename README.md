# human-inventory-management-system

# Description

This is a CLI application that allows user manage their Human Resources database. The applications runs on NodeJS. The database is manipulated using mysql and the interface is created using Inquirer. The output tables are styled using the Console-table npm package.

![demo]( https://content.screencast.com/users/nrt.damian/folders/Snagit/media/522bd263-ee7b-4cf2-ad34-79c91611967c/12.15.2019-23.02.GIF)



# Content

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [Planned upgrades](#Planned upgrades)
- [License](#License)

# Installation

To get started [clone or download this repository]( https://github.com/jondam1985/human-inventory-management-system ).

In your bash run ``npm install`` to install all the needed dependencies. If you prefer to install the separately run ``npm install inquirer`` for Inquirer, ``npm install mysql`` for mysql and ``npm install console-table`` for Console-table.

Once installed you need to create the database. You can use `schema.sql` and `seeder.sql` to create the database an add a few test records.

Update the ``connection string`` (lines 6 yo 10) values in the ``queries.js`` file to include your `mysql` connection information.

# Usage

__*****Please note that the user experience will be improved in future iterations.*****__

To start the application enter `node launch.js`.

After you have selected an option and received a response press `ctrl + c` to close the connection. You will need to enter `node launch.js` once again to perform another action.

### Options

- **VIEW RECORDS**: queries and displays existing information in the database.
  - **VIEW EMPLOYEES**: displays the information of all the employees.
  - **VIEW ROLES**: displays the information of all the roles.
  - **VIEW DEPARTMENTS**: displays the information of all the departments.
  - **VIEW EMPLOYEES BY MANAGER**: displays the information of all the direct reports of a given manager (you must enter the Manager's employee ID).
  - **VIEW UTILIZED BUDGET**: shows the sum of all the salaries in the database.
- **ADD RECORDS**: allows you to add new records to the database.
  - **ADD EMPLOYEE**: add a new record to the `employees` table.
  - **ADD ROLE**: add a new record to the `roles` table.
  - **ADD DEPARTMENT**: add a new record to the `deparments` table.
- **UPDATE RECORDS**: allows you to update existing records in the database.
  - **UPDATE ROLE**: update an employee's role ID.
- **QUIT**: closes the application without performing any action.

# Planned upgrades

- Users will need to launch the app just once to perform as many actions as they want.
- Options to delete information from the database will be added.
- Queries will be performed using `name` fields rather than `id` fields.

# Credits

### Author

This project was created by [Damian Ruiz](https://github.com/jondam1985) as a project assignment for the [UofT Full Stack Coding Bootcamp]( https://bootcamp.learn.utoronto.ca/coding/).

### Dependencies

- CLI interface created with [Inquirer](https://www.npmjs.com/package/inquirer).
- Connection to database done with [mysql](https://www.npmjs.com/package/mysql). 
- Tables output styled with [console-table](https://www.npmjs.com/package/console-table).

# License

This project is licensed under the MIT license. Please see [LICENSE](./LICENSE) file for details.

# Collaboration

Please feel free to use and update this project as you see feet. Implementing the [planned upgrades](#planned upgrades) would be a great place to start.

If you want to discuss this project or any of my other projects <a href="mailto:nrt.damian@gmail.com">please send me an email</a> or follow me at https://github.com/jondam1985.



