CREATE TABLE Sprint(
    id INTEGER PRIMARY KEY,
    name CHAR(255),
    status CHAR(50) NOT NULL,
    project INTEGER NOT NULL,
    CONSTRAINT fk_status FOREIGN KEY (status) REFERENCES Status(statusName),
    CONSTRAINT fk_project FOREIGN KEY (project) REFERENCES Project(id)    
);