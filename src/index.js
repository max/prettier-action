const core = require("@actions/core");
const github = require("@actions/github");

const run = async () => {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);

  let files;
  try {
    files = await client.pulls.listFiles({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.pull_request.number
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(files);
};

module.exports = run;
