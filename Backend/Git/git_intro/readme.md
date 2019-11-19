# working directory
- area where all of our files and dirs and changes are living all the time 

git add <filename>

# staging area 
- files and dirs that we explicitly add to staging -area 

git commmit -m "<msg>"

# git directory aka git repo 
- this is where all our snapshots are stored

git log to see history of snapshots/commits

# adding multiple files of a certain type to staging area simultaneously

git add *.<file ext.>

- side note: you can make an entire commit w/o including all the files 

# adding all files in dir (including hidden)
git add -A
- adds all files and folders from the dir that you're in 
- this is a good command for adding everything in your project, all at one time

# removing files from staging area (e.g. b/c you dont want to have it as part of next commit)
- git reset HEAD <filename> 

# ignoring files
- type name of file into file ".gitignore" and the file will be ignored by git (it's invisible to git)

# listing all branches
- master branch is by default the main branch
- new branches are made for new features, testing, etc. and dont want it to be a part of main codebase
- can later merge these branches to original master branch 
- list all branches: 
git branch 
* - shown next to branch you are currently in 
- this is used to change back-and-forth b/w branches and decide which ones to merge into others
# adding a new branch
git checkout -b <branch name>

- note: you get automatically switched to new branch

# changing branches
git checkout <branch name>
# merging a branches

# how branches work,  merging branches
- merging branches puts their commits onto the same timeline (git will create a new commit that ties in the commits for both branches together via merge command)

git merge <name of branch you want to merge into current branch>

- forces a commit
- can branch off again and merge again later

# removing a branch 
- probably best not to delete branches unless you really need to since they don't take up a lot of space and you might regret it
git branch -d <branch name>

# upload project code to GitHub
git remote add origin <url>
 
# ensure origin got added as a remote 
git remote -v

# push/upload code to github repo
git push -u origin master
- local branch master is now on remote branch also called master on GitHub and teh remote is called origin