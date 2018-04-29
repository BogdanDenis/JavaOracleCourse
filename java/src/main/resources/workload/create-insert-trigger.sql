CREATE OR REPLACE TRIGGER WorkloadInsert
BEFORE INSERT ON Workload
FOR EACH ROW
BEGIN
    select WorkloadIds.nextval INTO :new.id FROM dual;
END;