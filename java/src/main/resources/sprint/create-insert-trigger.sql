CREATE OR REPLACE TRIGGER SprintInsert
BEFORE INSERT ON Sprint
FOR EACH ROW

DECLARE
    v_projectkey VARCHAR2(100);

BEGIN
    SELECT :new.projectKey INTO v_projectkey FROM dual;
    SELECT SprintIds.nextval INTO :new.id FROM dual;
    SELECT 1 INTO :new.isActive FROM dual;
    SELECT 0 INTO :new.isBacklog FROM dual;
    
    UPDATE Sprint
    SET isActive = 0
    WHERE projectKey = v_projectkey;
END;