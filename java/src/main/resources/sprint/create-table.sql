CREATE TABLE Sprint(
    id INTEGER PRIMARY KEY,
    name VARCHAR2(255),
    status VARCHAR2(50) NOT NULL,
    projectId INTEGER NOT NULL,
    CONSTRAINT fk_status FOREIGN KEY (status) REFERENCES Status(statusName),
    CONSTRAINT fk_project FOREIGN KEY (projectId) REFERENCES Project(id)    
);