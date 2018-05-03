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
    v_projectkey VARCHAR2(100);
BEGIN
    SELECT :new.key INTO v_projectkey FROM dual;
    INSERT INTO Sprint(name, projectKey)
    VALUES('Backlog', v_projectkey);
    
    UPDATE Sprint
    SET isActive = 0,
        isBacklog = 1
    WHERE id = (SELECT MAX(id) FROM Sprint);
END;