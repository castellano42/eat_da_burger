REATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(100),
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP
)
