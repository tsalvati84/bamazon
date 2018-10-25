CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE Products (
ItemId INT NOT NULL,
ProductName varchar(100) NOT NULL,
DepartmentName varchar(100) NOT NULL,
Price Decimal(4,2) NOT NULL,
StockQuantity INT NOT NULL
);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES 
("Samsung", "Televisions", 19000.00, 25),
("LG", "Televisions", 28616.24, 25),
("Sharp", "Televisions", 13188.99, 50),
("Vizio", "Televisions", 9999.99, 100),
("Tosiba", "Televisions", 115229.99, 2),
("Sony", "Surround Sound", 1999.95, 100),
("Yamaha", "Surround Sound", 1499.95, 250),
("Pioneer", "Surround Sound", 1149.00, 250),
("LG", "Surround Sound", 2500.00, 75),
("Samsung", "Surround Sound", 2225.99, 150);

SELECT * from Products;

