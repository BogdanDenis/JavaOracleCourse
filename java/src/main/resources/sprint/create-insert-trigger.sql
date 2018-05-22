CREATE OR REPLACE TRIGGER SprintInsert
BEFORE INSERT ON Sprint
FOR EACH ROW

BEGIN
    SELECT SprintIds.nextval INTO :new.id FROM dual;
    SELECT 0 INTO :new.isActive FROM dual;
    SELECT 0 INTO :new.isBacklog FROM dual;
    SELECT 0 INTO :new.isComplete FROM dual;
END;