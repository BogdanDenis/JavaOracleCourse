CREATE OR REPLACE TRIGGER IssueInsert
BEFORE INSERT ON Issue
FOR EACH ROW

DECLARE
    v_issuecount VARCHAR2(5);
    v_projectid INTEGER;
    v_issueid VARCHAR2(255);
    v_projectname VARCHAR2(100);
BEGIN
    SELECT :new.projectId INTO v_projectid
    FROM dual;
    SELECT name INTO v_projectname
    FROM (SELECT name FROM Project WHERE id = v_projectid AND ROWNUM < 2);
    SELECT count INTO v_issuecount
    FROM (SELECT CAST(count(*) AS VARCHAR2(5)) as count FROM Issue WHERE projectId = v_projectid);
    v_issueid := v_projectname || '-' || v_issuecount;
    SELECT v_issueid INTO :new.id FROM dual;
END;