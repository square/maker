const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const {
 getCurrentBranch, isStableRelease, isPreviewRelease,
} = require('../utils');

const branchName = getCurrentBranch();
const isStable = isStableRelease(branchName);
const isPreview = isPreviewRelease(branchName);

if (!isStable && !isPreview) {
	// only sync versioned releases to latest or latest-preview directories
	// e.g. no WIP branches or draft branches
	const noErrorStatus = 0;
	process.exit(noErrorStatus);
}

const latestAlias = isStable ? 'latest' : 'latest-preview';

function getDirectories(baseDirectory) {
	return fse.readdirSync(baseDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((directory) => directory.name);
}

const DIST = path.resolve(process.cwd(), '.dist');
const STYLEGUIDE_DIST = path.resolve(DIST, 'styleguide');
const STYLEGUIDE_SEMVER_DEPLOYS = getDirectories(STYLEGUIDE_DIST).filter(
	(deploy) => semver.valid(deploy),
);

STYLEGUIDE_SEMVER_DEPLOYS.sort((semverA, semverB) => {
	const lessThan = -1;
	const greaterThan = 1;
	if (semver.gt(semverA, semverB)) {
		return lessThan;
	}
	return greaterThan;
});

const noDeploys = 0;
if (STYLEGUIDE_SEMVER_DEPLOYS.length === noDeploys) {
	// nothing to sync
	const noErrorStatus = 0;
	process.exit(noErrorStatus);
}

const firstDeployIndex = 0;
const latestDeploy = STYLEGUIDE_SEMVER_DEPLOYS[firstDeployIndex];
const deployPath = path.resolve('./', '.dist/styleguide', latestDeploy);
const latestPath = path.resolve('./', '.dist/styleguide', latestAlias);

fse.removeSync(latestPath);
fse.copySync(deployPath, latestPath);
