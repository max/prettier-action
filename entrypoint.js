#!/usr/bin/env node

const { GITHUB_TOKEN, GITHUB_EVENT_NAME } = require("./src/constants.js");

const run = require("./src/index.js");

if (!GITHUB_TOKEN) {
  console.log("You must provide a GITHUB_TOKEN secret");
  process.exit(1);
}

const main = async () => {
  if (GITHUB_EVENT_NAME !== "pull_request") {
    console.log("This action only runs for pushes to PRs");
    process.exit(78);
  }

  await run();
};

main();
