const path = require('path');
const fse = require('fs-extra');
const branch = require('git-branch');
const origin = require('remote-origin-url');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

module.exports = async function ensureDeployDirectory() {
	// check if .dist exists, otherwise create it

	const distPath = path.resolve('./', '.dist');
	fse.ensureDirSync(distPath);
	process.chdir(distPath);

	// current working directory is now .dist
	// check if .dist is a git repo, otherwise git init

	const dotGitPath = path.resolve('./', '.git');
	let didInit = false;
	if (!fse.existsSync(dotGitPath)) {
		await exec('git init');
		didInit = true;
	}

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

	return distPath;
};
