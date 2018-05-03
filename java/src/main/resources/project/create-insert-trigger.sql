CREATE OR REPLACE TRIGGER ProjectInsertBefore
BEFORE INSERT ON Project
FOR EACH ROW
BEGIN
    SELECT ProjectIds.nextval INTO :new.id FROM dual;
    SELECT 0 INTO :new.storyIssueCount FROM dual;
END;

CREATE OR REPLACE TRIGGER ProjectInsertAfter
AFTER INSERT ON Project
FOR EACH ROW

DECLARE
    v_projectid INTEGER;
BEGIN
    SELECT :new.id INTO v_projectid FROM dual;
    INSERT INTO Sprint(name, isBacklog, isActive, projectId)
    VALUES('Backlog', 1, 0, v_projectid);
    UPDATE Sprint SET isActive = 0
    WHERE id = (SELECT MAX(id) FROM Sprint);
END;