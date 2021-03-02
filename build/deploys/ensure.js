const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const origin = require('remote-origin-url');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

module.exports = async function() {
	// check if .dist exists, otherwise create it

	let distPath = path.resolve('./', '.dist');
	fse.ensureDirSync(distPath);
	process.chdir(distPath);

	// current working directory is now .dist
	// check if .dist is a git repo, otherwise git init

	let dotGitPath = path.resolve('./', '.git');
	let didInit = false;
	if (!fse.existsSync(dotGitPath)) {
		await exec('git init');
		didInit = true;
	}

	// check if git repo has square/maker as its remote origin

	const remoteOrigin = origin.sync(); // returns undefined if no remote origin set
	didAddOrigin = false;
	if (remoteOrigin !== 'git@github.com:square/maker.git') {
		if (!didInit) {
			throw new Error(`you have some git repo in .dist with remote origin ${remoteOrigin} but the deploy script expects git@github.com:square/maker.git`);
		}
		await exec('git remote add origin git@github.com:square/maker.git');
		didAddOrigin = true;
	}

	// fetch remote branches if necessary

	if (didAddOrigin) {
		await exec('git fetch');
	}

	// check if git repo has the deploys branch checked out

	const gitBranch = branch.sync();
	if (gitBranch !== 'deploys') {
		await exec('git checkout deploys');
	}
};
