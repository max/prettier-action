const core = require("@actions/core");
const github = require("@actions/github");

const run = async () => {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);

  console.log(github.context);

  let files;
  try {
    files = await getChangedFiles(client, github.context);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(files);
};

async function getChangedFiles(client, context) {
  const { data: files } = await client.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.pull_request.number
  });

  return files;
}

module.exports = run;
