# Contributing to **pixelsHash 📸**

This documentation contains a set of guidelines to help you during the contribution process. We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. Thank you for helping out and remember, no contribution is too small.

## How to contribute

**Step 1**: Fork the Project

- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in upstream remote.

```
git clone https://github.com/<your-username>/pixelsHash
cd pixelsHash
git remote add upstream https://github.com/sohamsshah/pixelsHash
```

**Step 2**: Keep yourself Updated

```
git remote update
git checkout <branch-name>
git rebase upstream/<branch-name>
```

**Step 3**: Create a feature branch and work remotely

```
git checkout -b branch_name
```

**Step 4**: Work on the assigned issue

- Work on the issue(s) assigned to you.
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:

```
# To add all new files to branch Branch_Name
git add .

# To add only a few files to Branch_Name
git add <some files>
```

**Step 5**: Commit

This message get associated with all files you have changed

```
git commit -m "message"
```

**Step 6**: Work Remotely

- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```
# To push your work to your remote repository
git push -u origin Branch_Name
```

**Step 7**: Make a PR

- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.

- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳 Make sure you make a PR to `develop` branch as the base.

## Run Tests

Before Raising a PR, make sure you run `yarn lint:fix` in order to avoid any linting or formatting inconsistensies.

Also check for any tests if any.

## Code of Conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project contributors to adhere to it. Please read the full text so that you can understand what actions will and will not be tolerated.
