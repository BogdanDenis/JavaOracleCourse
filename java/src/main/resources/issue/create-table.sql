CREATE TABLE Issue(
    id VARCHAR2(255) PRIMARY KEY,
    type CHAR(50) NOT NULL,
    name CHAR(255) NOT NULL,
    description CHAR(255),
    creationDate INTEGER NOT NULL,
    assigneeId INTEGER NOT NULL,
    reporterId INTEGER NOT NULL,
    status CHAR(50) NOT NULL,
    estimationOriginal INTEGER NOT NULL,
    estimationUsed INTEGER NOT NULL,
    projectId INTEGER NOT NULL,
    CONSTRAINT fk_issuetype FOREIGN KEY(type) REFERENCES Type(typeName),
    CONSTRAINT fk_issueassignee FOREIGN KEY(assigneeId) REFERENCES Developer(id),
    CONSTRAINT fk_issuereporter FOREIGN KEY(reporterId) REFERENCES Developer(id),
    CONSTRAINT fk_issuestatus FOREIGN KEY(status) REFERENCES Status(statusName),
    CONSTRAINT fk_issueproject FOREIGN KEY(projectId) REFERENCES Project(id)
);