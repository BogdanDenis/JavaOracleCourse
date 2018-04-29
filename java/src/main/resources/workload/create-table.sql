CREATE TABLE Workload(
    id INTEGER PRIMARY KEY,
    developerId INTEGER NOT NULL,
    projectId INTEGER NOT NULL,
    CONSTRAINT fk_workload_developer FOREIGN KEY (developerId) REFERENCES Developer(id),
    CONSTRAINT fk_workload_project FOREIGN KEY (projectId) REFERENCES Project(id)
);