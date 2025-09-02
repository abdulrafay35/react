Adding code to github:
1. Go to github and create a repo
2. Come in git bash terminal and run these commands :
# make sure you’re in your project folder
git init

# add all your files
git add .

# create a commit
git commit -m "first commit"

# rename your branch to main (only needs to be done once)
git branch -M main

# link to your GitHub repo
git remote add origin [repo] 

# now push to GitHub
git push -u origin main