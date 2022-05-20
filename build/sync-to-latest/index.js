const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const {
	LATEST_STABLE,
	LATEST_BETA,
} = require('../utils');

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

function getLatestStableFromSorted(sortedSemverArray) {
	return sortedSemverArray.find(
		(semverItem) => !semver.prerelease(semverItem),
	);
}

function getLatestBetaFromSorted(sortedSemverArray) {
	return sortedSemverArray.find(
		(semverItem) => {
			const parsedPrerelease = semver.prerelease(semverItem);
			return parsedPrerelease && parsedPrerelease[0] === 'beta';
		},
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
		const latestStableDeploy = getLatestStableFromSorted(semverArray);
		if (latestStableDeploy) {
			syncDistDirectories(distDirectory, latestStableDeploy, LATEST_STABLE);
		}

		const latestBetaDeploy = getLatestBetaFromSorted(semverArray);
		if (latestBetaDeploy) {
			syncDistDirectories(distDirectory, latestBetaDeploy, LATEST_BETA);
		}
	}
}

syncSemverToLatest(STYLEGUIDE_SEMVER_DEPLOYS, 'styleguide');
syncSemverToLatest(LAB_SEMVER_DEPLOYS, 'lab');
