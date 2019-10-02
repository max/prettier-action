const github = require("@actions/github");

const run = async () => {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);

  let pr;
  try {
    pr = await client.pulls.listFiles({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: 1
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(pr);
};

module.exports = run;
