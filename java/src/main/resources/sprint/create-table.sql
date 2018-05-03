CREATE TABLE Sprint(
    id INTEGER PRIMARY KEY,
    name VARCHAR2(255) NOT NULL,
    isBacklog NUMBER(1, 0) NOT NULL,
    isActive NUMBER(1, 0) NOT NULL,
    projectId INTEGER NOT NULL,
    CONSTRAINT fk_project FOREIGN KEY (projectId) REFERENCES Project(id)    
);