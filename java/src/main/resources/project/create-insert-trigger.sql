CREATE OR REPLACE TRIGGER ProjectInsert
BEFORE INSERT ON Project
FOR EACH ROW
BEGIN
    select ProjectIds.nextval INTO :new.id FROM dual;
END;