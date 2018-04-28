CREATE TABLE Developer(
    id INTEGER PRIMARY KEY,
    namea CHAR(255) NOT NULL,
    email CHAR(255) UNIQUE NOT NULL,
    password CHAR(64) NOT NULL
);