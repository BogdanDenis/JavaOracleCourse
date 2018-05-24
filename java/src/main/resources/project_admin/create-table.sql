CREATE TABLE ProjectAdmin (
    adminId INTEGER,
    projectKey VARCHAR2(100),
    CONSTRAINT pk_project_admin PRIMARY KEY(adminId, projectKey),
    CONSTRAINT fk_project_admin_developer FOREIGN KEY(adminId) REFERENCES developer(id),
    CONSTRAINT fk_project_admin_project FOREIGN KEY(projectKey) REFERENCES project(key)
);