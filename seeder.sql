USE hr_management;

INSERT INTO department (id, name)
VALUES (101, "Accounting"), 
(102, "Technology");

INSERT INTO role (id, title, salary, department_id)
VALUES (11, "Accountant", 3000.00, 101),
(12, "Office clerk", 2000.00, 101),
(21, "Front end developer", 4000.00, 102),
(22, "Back end developer", 5000.00, 102);

insert into employee (id, first_name, last_name, role_id, manager_id)
values (111, "Sam", "Max", 11, 333),
(222, "Nellie", "Porter", 12, 333),
(333, "Gordon", "Fatsso", 11, null),
(444, "Abeline", "Deline", 21, 555),
(555, "Pongo", "Tinselton", 22, null),
(666, "Gussie", "Finkle-Norton", 21, 555);