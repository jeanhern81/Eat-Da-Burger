--create database
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

--use database
USE burger_db;


--table
CREATE TABLE burgers 
(
	id int NOT(10) NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
