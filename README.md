# journey2mallorca-blog

#### Collaboration
- Fork a private repository following next step
```markdown
git clone https://github.com/[user-name]/journey2mallorca-blog.git
git remote add upstream https://github.com/Journey2Mallorca/journey2mallorca-blog.git
git checkout -b [feature-branch]
```

- Commit to fix behaviour following next step
```markdown
git add --ignore-removal --all && git commit -m "fix behaviour"
# repeat this process with all necessary commits
git status # Nothing to commit, working directory clean
git checkout master
git merge [feature-branch]
git push origin master
# Create pull request and merge if you are a team collaborator
```

- Update private and local with next steps
```markdown
git checkout master
git pull upstream master
git push origin master
git checkout [feature-branch]
git checkout -- .
git clean -fx
git pull origin master
# fix merge conflicts (UU)
git add . && git commit -m "merge with local"
```

- *Do not push upstream*