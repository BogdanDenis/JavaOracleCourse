CREATE OR REPLACE TRIGGER SprintInsert
BEFORE INSERT ON Sprint
FOR EACH ROW
BEGIN
    select SprintIds.nextval INTO :new.id FROM dual;
END;