const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const origin = require('remote-origin-url');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

function hasUncommitedChanges(gitStatusStdout) {
	let stdout = gitStatusStdout.toLowerCase();
	const uncommitedPhrases = [
		'changes not staged for commit:',
		'changes to be committed:',
		'untracked files:'
	];
	return uncommitedPhrases.some(stdout.includes.bind(stdout));
}

(async function ensureDeployDirectory() {
	let gitStatus = await exec('git status');
	if (hasUncommitedChanges(gitStatus.stdout)) {
		throw new Error('cannot switch to master branch if you have uncommitted changes');
	}

	let result = await exec('git checkout master');
	console.log(result);
	result = await exec('git pull');
	console.log(result);


	/*
	// check if git repo has square/maker as its remote origin

	const validOrigins = [
		'git@github.com:square/maker.git',
		'git@github.com:square/maker',
		'https://github.com/square/maker.git',
		'https://github.com/square/maker',
	];

	const remoteOrigin = origin.sync(); // returns undefined if no remote origin set
	let didAddOrigin = false;
	if (!validOrigins.includes(remoteOrigin)) {
		if (!didInit) {
			throw new Error(`you have some git repo in .dist with remote origin ${remoteOrigin} but the deploy script expects one of: ${validOrigins.join(' ')}`);
		}
		await exec('git remote add origin git@github.com:square/maker.git');
		didAddOrigin = true;
	}

	// fetch remote branches if necessary

	if (didAddOrigin) {
		await exec('git fetch origin deploys --depth=1');
	}

	// check if git repo has the deploys branch checked out

	const gitBranch = branch.sync();
	if (gitBranch !== 'deploys') {
		await exec('git checkout deploys');
	}
	*/
})();
