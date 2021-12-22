# Project-Catwalk
Project Catwalk is a client-facing retail web-portal.

JSON.package Dependencies:
- axios 
- linter (eslint)
- react
- react-dom 
- babel (webpack)


Git Workflow Steps:::: 
https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

-----------------------------------------
1. Each Morning! Start with Main Branch: 
First command switches to main branch. Second command pulls the latest commits. Then the third resets the local copy of main to match the latest version.

git checkout main 
git fetch origin  
git reset --hard origin/main 

-------------------------
2. Create a new-branch:
The name should be descriptive of the feature you are working on. Each feature should have its own branch!!

git checkout -b *new feature name*

------------------------------------------
3. Update, add, commit, and push changes

git status
git add [file-names]
git commit

----------------------------------
4. Push feature branch to remote
This allows you to push to the remote branch without merging. 

git push -u origin [branch-name]
    
----------------------------------
5. Resolve feedback (CODE REVIEW) 
----------------------------------
7. Merge pull requests 
