const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const {
	getCurrentBranch,
	isStableRelease,
	isPreviewRelease,
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

function getSubDirectories(baseDirectory) {
	return fse.readdirSync(baseDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((directory) => directory.name);
}

function getSemverDeploys(semverDirectory) {
	return getSubDirectories(semverDirectory)
		.filter((deploy) => semver.valid(deploy));
}

// sorts in desc order, from latest to oldest
function sortSemverDescInPlace(semverArray) {
	semverArray.sort((semverA, semverB) => {
		const lessThan = -1;
		const greaterThan = 1;
		if (semver.gt(semverA, semverB)) {
			return lessThan;
		}
		return greaterThan;
	});
}

function getLatestFromSorted(sortedSemverArray) {
	return sortedSemverArray.find(
		(semverItem) => !semver.prerelease(semverItem),
	);
}

function getLatestPreviewFromSorted(sortedSemverArray) {
	return sortedSemverArray.find(
		(semverItem) => !!semver.prerelease(semverItem),
	);
}

const DIST = path.resolve(process.cwd(), '.dist');
const STYLEGUIDE_DIST = path.resolve(DIST, 'styleguide');
const LAB_DIST = path.resolve(DIST, 'lab');

const STYLEGUIDE_SEMVER_DEPLOYS = getSemverDeploys(STYLEGUIDE_DIST);
const LAB_SEMVER_DEPLOYS = getSemverDeploys(LAB_DIST);

sortSemverDescInPlace(STYLEGUIDE_SEMVER_DEPLOYS);
sortSemverDescInPlace(LAB_SEMVER_DEPLOYS);

function syncDistDirectories(distDirectory, distSourceDirectory, distDestinationDirectory) {
	const sourceDirectory = path.resolve('./', '.dist', distDirectory, distSourceDirectory);
	const destinationDirectory = path.resolve('./', '.dist', distDirectory, distDestinationDirectory);
	fse.removeSync(destinationDirectory);
	fse.copySync(sourceDirectory, destinationDirectory);
}

const noDeploys = 0;
function syncSemverToLatest(semverArray, distDirectory) {
	if (semverArray.length > noDeploys) {
		const latestDeploy = getLatestFromSorted(semverArray);
		if (latestDeploy) {
			syncDistDirectories(distDirectory, latestDeploy, 'latest');
		}

		const latestPreviewDeploy = getLatestPreviewFromSorted(semverArray);
		if (latestPreviewDeploy) {
			syncDistDirectories(distDirectory, latestPreviewDeploy, 'latest-preview');
		}
	}
}

syncSemverToLatest(STYLEGUIDE_SEMVER_DEPLOYS, 'styleguide');
syncSemverToLatest(LAB_SEMVER_DEPLOYS, 'lab');
