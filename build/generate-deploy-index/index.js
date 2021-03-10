const path = require('path');
const fs = require('fs');

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

const STYLEGUIDE_DEPLOYS = getDirectories(STYLEGUIDE_DIST);
const LAB_DEPLOYS = getDirectories(LAB_DIST);

const VERSION_REGEX = /^\d+\.\d+\.\d+/;
function isVersion(deployName) {
	return deployName === 'latest' || VERSION_REGEX.test(deployName);
}
function isntVersion(deployName) {
	return !isVersion(deployName);
}

function toDeployLinks(prefix, suffix, items) {
	items.sort();
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
</head>
<body>
	<h2>Styleguide Deploys</h2>
	<h3>Versioned releases</h3>
	<ul>
		${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isVersion))}
	</ul>
	<h3>WIP branches</h3>
	<ul>
		${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isntVersion))}
	</ul>
	<h2>Lab Deploys</h2>
	<ul>
		${toDeployLinks(LAB_URL_PREFIX, URL_SUFFIX, LAB_DEPLOYS)}
	</ul>
</body>
</html>
`;

fs.writeFileSync(DIST_INDEX, BUILT_INDEX);
