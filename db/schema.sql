ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Mercury35!'

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE Burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
