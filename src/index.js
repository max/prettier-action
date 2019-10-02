const github = require("@actions/github");

const run = async () => {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);

  const { data: changedFiles } = await client.pulls.listFiles({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    pull_number: github.context.issue.number
  });

  changedFiles.map(({ filename }) => console.log(filename));
};

module.exports = run;
