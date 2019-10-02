const github = require("@actions/github");

const run = async () => {
  const octokit = new github.GitHub(process.env.GITHUB_TOKEN);

  let pr;
  try {
    pr = await octokit.pulls.get({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: 1,
      mediaType: {
        format: "diff"
      }
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(pr);
};

module.exports = run;
