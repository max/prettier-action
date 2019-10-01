const github = require("@actions/github");

const run = async () => {
  console.log("->> Starting Prettier...");

  let files;
  try {
    files = await github.pulls.listFiles({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: 1
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(files);
};

module.exports = run;
