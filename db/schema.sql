DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT auto_increment,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    `date` TIMESTAMP,
    PRIMARY KEY (id)
);
