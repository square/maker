// this should only run on CI

const fse = require('fs-extra');
const semver = require('semver');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// env var set by CI
const branchName = process.env.GITHUB_HEAD_REF;

// current working directory is project root
const branchPackage = fse.readJsonSync('./package.json');

/* check deps */

function checkDeps(requiredDeps, installedDeps) {
	let errors = [];
	for (let [requiredDep, requiredVer] of Object.entries(requiredDeps)) {
		if (!installedDeps[requiredDep]) {
			errors.push(`missing required dep: ${requiredDep}@${requiredVer}`);
			continue;
		}
		let installedVer = installedDeps[requiredDep];
		if (installedVer !== requiredVer) {
			errors.push(`expected dep ${requiredDep} to be ver ${requiredVer} but found ${installedVer}`);
		}
	}
	if (errors.length > 0) {
		throw new Error(`found dep errors:\n${errors.join('\n')}`);
	}
}

// peer deps should be mirrored in dev deps identically
checkDeps(branchPackage.peerDependencies, branchPackage.devDependencies);

/* checkout master */

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

	const branchVer = branchPackage.version;

	// read master's package.json
	const masterPackage = fse.readJsonSync('./package.json');
	const masterVer = masterPackage.version;

	// if PR branch's version is not > master's version throw error
	if (!semver.ge(branchVer, masterVer)) {
		throw new Error(`${branchName} PR has Maker ver ${branchVer} in package.json which is not >${masterVer} in master branch`);
	}
}());
