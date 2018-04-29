CREATE OR REPLACE TRIGGER DeveloperInsert
BEFORE INSERT ON Developer
FOR EACH ROW
BEGIN
    select DeveloperIds.nextval INTO :new.id FROM dual;
END;