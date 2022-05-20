const _ = require('lodash');
const branch = require('git-branch');
const { execSync } = require('child_process');
const semver = require('semver');
const { version } = require('../package.json');

function merge(...objects) {
	return _.mergeWith(...objects, (objectValue, sourceValue) => {
		if (Array.isArray(objectValue) && Array.isArray(sourceValue)) {
			return objectValue.concat(sourceValue);
		}
		return undefined;
	});
}

function getCurrentBranch() {
	// branch.sync() doesn't work in the Github Actions env
	let branchName = branch.sync();
	if (!branchName) {
		// but that's okay because the Github Actions env provides this var
		branchName = process.env.GITHUB_HEAD_REF;
	}
	return branchName;
}

const BACKPORT_BRANCH_REGEX = /\d+\.x/;
const SEMANTIC_BRANCHES = new Set([
	'master',
	'next',
	'next-major',
	'beta',
	'alpha',
]);
const STABLE_BRANCHES = new Set([
	'master',
]);
const BETA_BRANCHES = new Set([
	'beta',
]);
const PREVIEW_BRANCHES = new Set([
	'next',
	'next-major',
	'beta',
	'alpha',
]);

function isSemanticRelease(branchName) {
	return SEMANTIC_BRANCHES.has(branchName) || BACKPORT_BRANCH_REGEX.test(branchName);
}

function isStableRelease(branchName) {
	return STABLE_BRANCHES.has(branchName) || BACKPORT_BRANCH_REGEX.test(branchName);
}

function isBetaRelease(branchName) {
	return BETA_BRANCHES.has(branchName);
}

function isPreviewRelease(branchName) {
	return PREVIEW_BRANCHES.has(branchName);
}

const NO_VERSION_INFO = '0.0.0-semantic-release';

function getLibraryVersion() {
	const zero = 0;
	let libraryVersion = version;
	if (libraryVersion === NO_VERSION_INFO) {
		let tagsOutput = execSync('git tag --points-at HEAD'); // returns byte buffer
		tagsOutput = tagsOutput.toString(); // converts byte buffer to string
		const semverTags = tagsOutput
			.trim()
			.split(/(\s+)/) // split by whitespace
			.filter((tag) => tag.trim().length > zero) // remove empty strings
			.map((tag) => semver.clean(tag)) // may return null
			.filter((tag) => !!tag); // null check
		semverTags.sort((tagA, tagB) => {
			const lessThan = -1;
			const greaterThan = 1;
			if (semver.gt(tagA, tagB)) {
				return lessThan;
			}
			return greaterThan;
		});
		if (semverTags.length > zero) {
			[libraryVersion] = semverTags; // latest semver tag
		}
	}
	// will return 0.0.0-semantic-release if no tag found at HEAD
	// which will be the case on commit types like: ci, docs, refactor
	return libraryVersion;
}

function getDeployName() {
	const branchName = getCurrentBranch();

	// temporary line just for testing, remove later:
	console.log({ DEPLOY_NAME: process.env.DEPLOY_NAME });
	console.log({ FULL_ENV: process.env });

	if (process.env.DEPLOY_NAME === 'git_branch') {
		return branchName;
	}
	if (!isSemanticRelease(branchName)) {
		return branchName;
	}
	const libraryVersion = getLibraryVersion();
	if (process.env.DEPLOY_NAME === 'library_version') {
		return libraryVersion;
	}
	if (libraryVersion === NO_VERSION_INFO) {
		return branchName;
	}
	return libraryVersion;
}

module.exports = {
	NO_VERSION_INFO,
	merge,
	getDeployName,
	getCurrentBranch,
	getLibraryVersion,
	isSemanticRelease,
	isStableRelease,
	isPreviewRelease,
	isBetaRelease,
};
