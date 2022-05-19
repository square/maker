/* eslint unicorn/no-fn-reference-in-iterator: 0 */

const path = require('path');
const fs = require('fs');
const semverSort = require('semver/functions/rsort');
const semverValid = require('semver/functions/valid');

const DIST = path.resolve(process.cwd(), '.dist');
const DIST_INDEX = path.resolve(DIST, 'index.html');
const STYLEGUIDE_DIST = path.resolve(DIST, 'styleguide');
const LAB_DIST = path.resolve(DIST, 'lab');

function ensureDirectory(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
	}
}

function getDirectories(baseDirectory) {
	return fs.readdirSync(baseDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((directory) => directory.name);
}

ensureDirectory(LAB_DIST);
ensureDirectory(STYLEGUIDE_DIST);

const STYLEGUIDE_DEPLOYS = getDirectories(STYLEGUIDE_DIST).filter((d) => d !== '0.0.0-semantic-release');
const LAB_DEPLOYS = getDirectories(LAB_DIST).filter((d) => d !== '0.0.0-semantic-release');
const additionalVersions = ['latest-preview', 'latest'];

function isVersion(deployName) {
	return additionalVersions.includes(deployName) || semverValid(deployName);
}
function isntVersion(deployName) {
	return !isVersion(deployName);
}
function sort(items, isSemverItems) {
	if (isSemverItems) {
		items = items.filter((item) => semverValid(item));
		semverSort(items);

		additionalVersions.forEach((version) => {
			items.unshift(version);
		});

		return items;
	}

	return items.sort();
}

function toDeployLinks(prefix, suffix, items, isSemverItems) {
	items = sort(items, isSemverItems);
	return items.map((item) => `<li><a href="${prefix}${item}${suffix}">${item}</a></li>`).join('\n');
}

const STYLEGUIDE_URL_PREFIX = 'https://square.github.io/maker/styleguide/';
const LAB_URL_PREFIX = 'https://square.github.io/maker/lab/';
const URL_SUFFIX = '/#/';

const BUILT_INDEX = `
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		body {
			font-family: sans-serif;
		}
	</style>
</head>
<body>
	<h2>Styleguides</h2>
	<h3>Versioned Releases</h3>
	<ul>
		${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isVersion), true)}
	</ul>
	<h3>WIP Branches</h3>
	<ul>
		${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isntVersion))}
	</ul>
	<h2>Labs</h2>
	<h3>Versioned Releases</h3>
	<ul>
		${toDeployLinks(LAB_URL_PREFIX, URL_SUFFIX, LAB_DEPLOYS.filter(isVersion), true)}
	</ul>
	<h3>WIP Branches</h3>
	<ul>
		${toDeployLinks(LAB_URL_PREFIX, URL_SUFFIX, LAB_DEPLOYS.filter(isntVersion))}
	</ul>
</body>
</html>
`;

fs.writeFileSync(DIST_INDEX, BUILT_INDEX);
