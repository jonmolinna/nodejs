--Creating the database
CREATE DATABASE crudnodejsmysql;

--Using the DataBase
USE crudnodejsmysql;

--Creating a Table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--SHOW ALL TABLES
SHOW TABLES;

--DESCRIBE THE TABLE
DESCRIBE customer;





