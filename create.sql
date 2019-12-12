CREATE database hr_management;

USE hr_management;

CREATE table employee (
id int not null,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
manager_id int,
primary key(id));

CREATE TABLE role (
id int not null,
title varchar(30),
salary decimal default 0.0,
department_id int,
primary key(id)
);

CREATE TABLE department (
id int not null,
name varchar(30),
primary key(id)
);