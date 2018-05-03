CREATE TABLE Issue(
    id INTEGER PRIMARY KEY,
    key VARCHAR2(255) UNIQUE NOT NULL,
    type VARCHAR2(50) NOT NULL,
    name VARCHAR2(255) NOT NULL,
    description VARCHAR2(2000),
    creationDate INTEGER NOT NULL,
    assigneeId INTEGER NOT NULL,
    reporterId INTEGER NOT NULL,
    status VARCHAR2(50) NOT NULL,
    estimationOriginal INTEGER NOT NULL,
    estimationUsed INTEGER NOT NULL,
    storyKey VARCHAR2(255) NOT NULL,
    CONSTRAINT fk_issue_type FOREIGN KEY(type) REFERENCES Type(typeName),
    CONSTRAINT fk_issue_assignee FOREIGN KEY(assigneeId) REFERENCES Developer(id),
    CONSTRAINT fk_issue_reporter FOREIGN KEY(reporterId) REFERENCES Developer(id),
    CONSTRAINT fk_issue_status FOREIGN KEY(status) REFERENCES Status(statusName),
    CONSTRAINT fk_issue_story FOREIGN KEY(storyKey) REFERENCES UserStory(key)
);
