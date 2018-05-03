CREATE TABLE Sprint(
    id INTEGER PRIMARY KEY,
    name VARCHAR2(255) NOT NULL,
    isBacklog NUMBER(1, 0) NOT NULL,
    isActive NUMBER(1, 0) NOT NULL,
    projectKey VARCHAR2(100) NOT NULL,
    CONSTRAINT fk_sprint_project FOREIGN KEY (projectKey) REFERENCES Project(key)    
);