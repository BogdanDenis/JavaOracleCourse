CREATE OR REPLACE TRIGGER StoryInsert
BEFORE INSERT ON UserStory
FOR EACH ROW

DECLARE
    v_storyissuecount INTEGER;
    v_sprintid INTEGER;
    v_storykey VARCHAR2(255);
    v_projectkey VARCHAR2(100);
BEGIN
    SELECT :new.sprintId INTO v_sprintid
    FROM dual;
    
    SELECT projectKey INTO v_projectkey
    FROM (SELECT projectKey
          FROM Sprint
          WHERE id = v_sprintid);
    
    SELECT storyIssueCount INTO v_storyissuecount
    FROM Project
    WHERE key = v_projectkey;
    
    v_storyissuecount := v_storyissuecount + 1;
    
    v_storykey := v_projectkey || '-' || v_storyissuecount;
    SELECT v_storykey INTO :new.key FROM dual;
    SELECT StoryIds.nextval INTO :new.id FROM dual;
    SELECT (SELECT statusName
            FROM Status
            WHERE statusName = 'OPEN') INTO :new.status
    FROM dual;
    
    UPDATE Project
    SET storyIssueCount = v_storyissuecount
    WHERE key = v_projectkey;
END;