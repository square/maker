const _ = require('lodash');
const branch = require('git-branch');
const { version } = require('../package.json');
const { execSync } = require('child_process');
const semver = require("semver");

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

function isSemanticReleaseBranch(branchName) {
	return ['master', 'next', 'next-major', 'beta', 'alpha'].includes(branchName);
}

function isStableRelease(branchName) {
	return branchName === 'master';
}

function isPreviewRelease(branchName) {
	return ['next', 'next-major', 'beta', 'alpha'].includes(branchName);
}

function getLibVersion() {
	let libVersion = version;
	if (libVersion === '0.0.0-semantic-release') {
		let tagsOutput = execSync('git tag --points-at HEAD'); // returns byte buffer
		tagsOutput = tagsOutput.toString(); // converts byte buffer to string
		let semverTags = tagsOutput
			.trim()
			.split(/(\s+)/)
			.filter(tag => tag.trim().length > 0)
			.map(tag => semver.clean(tag)) // may return null
			.filter(tag => !!tag); // null check
		semverTags.sort((tagA, tagB) => {
			if (semver.gt(tagA, tagB)) {
				return -1;
			}
			return 1;
		});
		if (semverTags.length > 0) {
			libVersion = semverTags[0]; // latest semver tag
		}
	}
	return libVersion;
}

module.exports = {
	merge,
	getCurrentBranch,
	getLibVersion,
	isSemanticReleaseBranch,
	isStableRelease,
	isPreviewRelease,
};
