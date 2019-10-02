// const core = require("@actions/core");
const github = require("@actions/github");

const run = async () => {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);

  let files;
  try {
    files = await client.pulls.listFiles({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: github.context.issue.number
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  files.map(({ filename }) => console.log(filename));
};

module.exports = run;
