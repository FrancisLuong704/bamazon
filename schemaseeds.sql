DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INTEGER (10) NOT NULL AUTO_INCREMENT,
    product VARCHAR(45),
    dept VARCHAR (45),
    price DECIMAL (10,2),
    quantity INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Phone", "Electronics", 499.99, 10);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Soccer Ball", "Exercise", 15.99, 4);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Collar", "Pet", 15.21, 3);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Table", "Household", 108.50, 5);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Glassware", "Kitchen", 35.90, 10);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Trashbags", "Household", 9.99, 24);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Laptop", "Electronics", 755.75, 8);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Candle", "Household", 5.67, 32);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Weight Set", "Exercise", 240.87, 3);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Dog Treats", "Pet", 34.99, 20);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Book", "Entertainment", 10.31, 48);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Basketball", "Exercise", 23.69, 8);