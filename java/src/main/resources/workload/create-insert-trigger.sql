CREATE OR REPLACE TRIGGER WorkloadInsert
BEFORE INSERT ON Workload
FOR EACH ROW
BEGIN
    SELECT WorkloadIds.nextval INTO :new.id FROM dual;
    SELECT 1 INTO :new.isActive FROM dual;
END;