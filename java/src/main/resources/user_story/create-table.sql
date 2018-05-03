CREATE TABLE UserStory(
    id INTEGER PRIMARY KEY,
    key VARCHAR2(255) UNIQUE NOT NULL,
    name VARCHAR2(500) NOT NULL,
    description VARCHAR2(1000),
    sprintId INTEGER NOT NULL,
    CONSTRAINT fk_userstory_sprint FOREIGN KEY(sprintId) REFERENCES Sprint(id)
);