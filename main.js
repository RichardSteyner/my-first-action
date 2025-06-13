const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the inputs from the action
  /*const token = core.getInput('github-token');
  const issueNumber = core.getInput('issue-number');
  const commentBody = core.getInput('comment-body');

  // Create a GitHub client
  const octokit = github.getOctokit(token);

  // Post a comment on the specified issue
  octokit.rest.issues.createComment({
	owner: github.context.repo.owner,
	repo: github.context.repo.repo,
	issue_number: issueNumber,
	body: commentBody,
  });

  console.log(`Comment posted on issue #${issueNumber}`);*/

  	const whoToGreet = core.getInput('who-to-greet');
  	const greeting = `Hello, ${whoToGreet}!`;
  	core.setOutput('greeting', greeting);
  
  	const time = new Date().toTimeString();
  	core.setOutput('time', time);

  	const payload = JSON.stringify(github.context.payload, undefined, 2);
  	console.log(`The event payload: ${payload}`);
} catch (error) {
  	// Log the error and set the action to fail
	console.error(`Error posting comment: ${error.message}`);
  	core.setFailed(`Action failed with error: ${error.message}`);
}