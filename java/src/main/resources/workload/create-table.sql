CREATE TABLE Workload(
    id INTEGER PRIMARY KEY,
    developerId INTEGER NOT NULL,
    projectKey VARCHAR2(100) NOT NULL,
    isActive NUMBER(1, 0) NOT NULL,
    CONSTRAINT fk_workload_developer FOREIGN KEY (developerId) REFERENCES Developer(id),
    CONSTRAINT fk_workload_project FOREIGN KEY (projectKey) REFERENCES Project(key)
);