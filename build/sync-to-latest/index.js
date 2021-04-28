const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const { getCurrentBranch, getLibVersion, isStableRelease, isPreviewRelease } = require('../utils');

let branchName = getCurrentBranch();
let isStable = isStableRelease(branchName);
let isPreview = isPreviewRelease(branchName);

if (!isStable && !isPreview) {
	// only sync versioned releases to latest or latest-preview directories
	// e.g. no WIP branches or draft branches
	process.exit(0);
}

const latestAlias = isStable ? 'latest' : 'latest-preview';

function getDirectories(baseDirectory) {
	return fse.readdirSync(baseDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((directory) => directory.name);
}

const DIST = path.resolve(process.cwd(), '.dist');
const STYLEGUIDE_DIST = path.resolve(DIST, 'styleguide');
const STYLEGUIDE_SEMVER_DEPLOYS = getDirectories(STYLEGUIDE_DIST).filter(deploy => semver.valid(deploy));
STYLEGUIDE_SEMVER_DEPLOYS.sort((semverA, semverB) => {
	if (semver.gt(semverA, semverB)) {
		return -1;
	}
	return 1;
});

if (STYLEGUIDE_SEMVER_DEPLOYS.length === 0) {
	// nothing to sync
	process.exit(0);
}

const latestDeploy = STYLEGUIDE_SEMVER_DEPLOYS[0];
const deployPath = path.resolve('./', '.dist/styleguide', latestDeploy);
const latestPath = path.resolve('./', '.dist/styleguide', latestAlias);

fse.removeSync(latestPath);
fse.copySync(deployPath, latestPath);
