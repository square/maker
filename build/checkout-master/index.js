const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

function hasUncommitedChanges(gitStatus) {
	const stdout = gitStatus.stdout.toLowerCase();
	const uncommitedPhrases = [
		'changes not staged for commit:',
		'changes to be committed:',
		'untracked files:',
	];
	return uncommitedPhrases.some(stdout.includes.bind(stdout));
}

(async function checkoutMasterAndPull() {
	const gitStatus = await exec('git status');
	if (hasUncommitedChanges(gitStatus)) {
		throw new Error('cannot switch to master branch if you have uncommitted changes');
	}

	await exec('git checkout master');
	const gitPull = await exec('git pull');
	if (gitPull.stderr) {
		throw new Error(`git pull wrote to stderr: ${gitPull.stderr}`);
	}
}());
