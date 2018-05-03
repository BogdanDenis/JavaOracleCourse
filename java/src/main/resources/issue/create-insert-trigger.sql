CREATE OR REPLACE TRIGGER IssueInsert
BEFORE INSERT ON Issue
FOR EACH ROW

DECLARE
    v_storyissuecount INTEGER;
    v_sprintid INTEGER;
    v_storykey VARCHAR2(255);
    v_issuekey VARCHAR2(255);
    v_projectkey VARCHAR2(100);
BEGIN
    SELECT :new.storyKey INTO v_storykey
    FROM dual;
    
    SELECT sprintId INTO v_sprintid
    FROM (SELECT sprintId
          FROM UserStory
          WHERE key = v_storykey);
    
    SELECT projectKey INTO v_projectkey
    FROM (SELECT projectKey
          FROM Sprint
          WHERE id = v_sprintid);
          
    SELECT storyIssueCount INTO v_storyissuecount
    FROM Project
    WHERE key = v_projectkey;
    
    v_storyissuecount := v_storyissuecount + 1;
    
    v_issuekey := v_projectkey || '-' || v_storyissuecount;
    
    SELECT v_issuekey INTO :new.key FROM dual;
    SELECT IssueIds.nextval INTO :new.id FROM dual;
    
    UPDATE Project
    SET storyIssueCount = v_storyissuecount
    WHERE key = v_projectkey;
END;