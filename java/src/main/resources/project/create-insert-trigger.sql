CREATE OR REPLACE TRIGGER ProjectInsertBefore
BEFORE INSERT ON Project
FOR EACH ROW
BEGIN
    SELECT ProjectIds.nextval INTO :new.id FROM dual;
END;

CREATE OR REPLACE TRIGGER ProjectInsertAfter
AFTER INSERT ON Project
FOR EACH ROW

DECLARE
    v_projectid INTEGER;
BEGIN
    SELECT :new.id INTO v_projectid FROM dual;
    INSERT INTO Sprint(name, status, projectId)
    VALUES('Backlog', (SELECT statusName
                       FROM Status
                       WHERE statusName = 'OPEN'), v_projectid);
END;