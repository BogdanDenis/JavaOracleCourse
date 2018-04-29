CREATE OR REPLACE TRIGGER IssueInsert
BEFORE INSERT ON Issue
FOR EACH ROW

DECLARE
    v_issuecount VARCHAR2(5);
    v_projectid INTEGER;
    v_sprintid INTEGER;
    v_issueid VARCHAR2(255);
    v_projectname VARCHAR2(100);
BEGIN
    SELECT :new.sprintId INTO v_sprintid
    FROM dual;
    SELECT projectId INTO v_projectid
    FROM (SELECT projectId
          FROM Sprint
          WHERE id = v_sprintid);
    SELECT name INTO v_projectname
    FROM (SELECT name
          FROM Project
          WHERE id = v_projectid AND ROWNUM < 2);
    SELECT count INTO v_issuecount
    FROM (SELECT CAST(count(*) AS VARCHAR2(5)) as count
          FROM Issue
          WHERE sprintId IN (SELECT id
                             FROM Sprint
                             WHERE projectId = v_projectid));
    v_issueid := v_projectname || '-' || v_issuecount;
    SELECT v_issueid INTO :new.id FROM dual;
    SELECT IssueIds.nextval INTO :new.numericId FROM dual;
END;