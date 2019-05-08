CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
    id int not null auto_increment,
    burger_name varchar(50) null,
    devoured boolean default false null,
    PRIMARY KEY (id)
);