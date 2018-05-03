CREATE OR REPLACE TRIGGER StoryInsert
BEFORE INSERT ON UserStory
FOR EACH ROW

DECLARE
    v_storyissuecount INTEGER;
    v_projectid INTEGER;
    v_sprintid INTEGER;
    v_storykey VARCHAR2(255);
    v_projectkey VARCHAR2(100);
BEGIN
    SELECT :new.sprintId INTO v_sprintid
    FROM dual;
    
    SELECT projectId INTO v_projectid
    FROM (SELECT projectId
          FROM Sprint
          WHERE id = v_sprintid);
    
    SELECT key INTO v_projectkey
    FROM (SELECT key
          FROM Project
          WHERE id = v_projectid AND ROWNUM < 2);
    
    SELECT storyIssueCount INTO v_storyissuecount
    FROM Project
    WHERE id = v_projectid;
    
    v_storyissuecount := v_storyissuecount + 1;
    
    v_storykey := v_projectkey || '-' || v_storyissuecount;
    SELECT v_storykey INTO :new.key FROM dual;
    SELECT StoryIds.nextval INTO :new.id FROM dual;
    
    UPDATE Project
    SET storyIssueCount = v_storyissuecount
    WHERE id = v_projectid;
END;