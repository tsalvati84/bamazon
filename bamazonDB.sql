DROP DATABASE IF EXISTS BamazonDB;

CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
Brand VARCHAR (150) NOT NULL,
Item  VARCHAR (150) NOT NULL,
Price int NOT NULL,
StockQuantity INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (Brand, Item, Price, StockQuantity) 
VALUES 
("Samsung", "Televisions", 500, 75),
("LG", "Televisions", 450, 25),
("Sharp", "Televisions", 799, 50),
("Vizio", "Televisions", 999, 100),
("Tosiba", "Televisions", 1129, 2),
("Sony", "Surround Sound", 1999, 100),
("Yamaha", "Surround Sound", 1499, 250),
("Pioneer", "Surround Sound", 1149, 250),
("LG", "Surround Sound", 2500, 75),
("Samsung", "Surround Sound", 2225, 150);

SELECT * from products;

