/* eslint unicorn/no-fn-reference-in-iterator: 0 */

const path = require('path');
const fs = require('fs');
const semverSort = require('semver/functions/rsort');
const semverValid = require('semver/functions/valid');
const {
	NO_VERSION_INFO,
	LATEST_STABLE,
	LATEST_BETA,
} = require('../utils');

const DIST = path.resolve(process.cwd(), '.dist');
const DIST_INDEX = path.resolve(DIST, 'index.html');
const STYLEGUIDE_DIST = path.resolve(DIST, 'styleguide');
const LAB_DIST = path.resolve(DIST, 'lab');

function ensureDirectory(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
	}
}

ensureDirectory(LAB_DIST);
ensureDirectory(STYLEGUIDE_DIST);

function getDirectories(baseDirectory) {
	return fs.readdirSync(baseDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((directory) => directory.name);
}

function getDeploys(baseDirectory) {
	return getDirectories(baseDirectory)
		.filter((deploy) => deploy !== NO_VERSION_INFO);
}

const STYLEGUIDE_DEPLOYS = getDeploys(STYLEGUIDE_DIST);
const LAB_DEPLOYS = getDeploys(LAB_DIST);
const LATEST_ALIASES = new Set([
	LATEST_STABLE,
	LATEST_BETA,
]);

function isVersion(deployName) {
	return LATEST_ALIASES.has(deployName) || semverValid(deployName);
}
function isntVersion(deployName) {
	return !isVersion(deployName);
}
function sort(items, isSemverItems) {
	if (isSemverItems) {
		const hasLatestStable = items.includes(LATEST_STABLE);
		const hasLatestBeta = items.includes(LATEST_BETA);
		const semverOnlyItems = items.filter((item) => semverValid(item));
		semverSort(semverOnlyItems);
		items = semverOnlyItems;
		if (hasLatestBeta) {
			items.unshift(LATEST_BETA);
		}
		if (hasLatestStable) {
			items.unshift(LATEST_STABLE);
		}
		return items;
	}

	return items.sort();
}

function toDeployLinks(prefix, suffix, items, isSemverItems) {
	items = sort(items, isSemverItems);
	return items.map((item) => `<li><a class="deploy-link" href="${prefix}${item}${suffix}" target="_blank" rel="noopener noreferrer">${item}</a></li>`).join('\n');
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
		h1, h2, h3, h4, h5, h6 {
			margin: 0 0 0.5em 0;
			white-space: nowrap;
		}
		.maker-link {
			color: inherit;
			font-family: inherit;
			font-size: inherit;
			font-weight: inherit;
			text-decoration: inherit;
			background-color: inherit;
		}
		.maker-link:hover {
			color: white;
			background-color: black;
		}
		.categories, .subcategories {
			display: flex;
			flex-wrap: wrap;
			gap: 16px;
		}
		.categories {
			gap: 32px;
			margin-bottom: 16px;
		}
		.deploy-links {
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-family: monospace;
			font-size: 16px;
		}
		.deploy-link {
			text-decoration: none;
			color: blue;
			background-color: transparent;
		}
		.deploy-link:visited {
			color: purple;
		}
		.deploy-link:hover {
			color: white;
			background-color: blue;
		}
		.deploy-link:hover:visited {
			background-color: purple;
		}
		.updated-msg {
			font-style: italic;
		}
	</style>
</head>
<body>
	<h1><a class="maker-link" href="https://github.com/square/maker" target="_blank" rel="noopener noreferrer">Maker</a> Deploys 🚀</h1>

	<div class="categories">
		<div class="category">
			<h2>Styleguides</h2>
			<div class="subcategories">
				<div class="subcategory">
					<h3>Releases</h3>
					<ul class="deploy-links">
						${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isVersion), true)}
					</ul>
				</div>
				<div class="subcategory">
					<h3>PRs</h3>
					<ul class="deploy-links">
						${toDeployLinks(STYLEGUIDE_URL_PREFIX, URL_SUFFIX, STYLEGUIDE_DEPLOYS.filter(isntVersion))}
					</ul>
				</div>
			</div>
		</div>

		<div class="category">
			<h2>Labs</h2>
			<div class="subcategories">
				<div class="subcategory">
					<h3>Releases</h3>
					<ul class="deploy-links">
						${toDeployLinks(LAB_URL_PREFIX, URL_SUFFIX, LAB_DEPLOYS.filter(isVersion), true)}
					</ul>
				</div>
				<div class="subcategory">
					<h3>PRs</h3>
					<ul class="deploy-links">
						${toDeployLinks(LAB_URL_PREFIX, URL_SUFFIX, LAB_DEPLOYS.filter(isntVersion))}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<span class="updated-msg">
		Last updated on <span class="updated-time"></span>
	</span>

	<script>
		const lastUpdated = new Date(${Date.now()});
		document
			.querySelector('.updated-time')
			.innerText = lastUpdated.toLocaleString();
	</script>
</body>
</html>
`;

fs.writeFileSync(DIST_INDEX, BUILT_INDEX);
