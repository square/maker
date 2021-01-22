const vueDocs = require('vue-docgen-api');
const tinyGlob = require('tiny-glob');
const path = require('path');
const { promises: fs } = require('fs');
const {
 groupBy, last, keyBy,
} = require('lodash');
const commentMark = require('comment-mark');
const generateApiTables = require('./generate-api-tables');
const developmentConfig = require('../webpack-development-config');

const pathExists = (fsPath) => fs.access(fsPath).then(() => true, () => false);

async function ensureReadme(componentPath) {
	const readmePath = path.join(componentPath, 'README.md');
	let readmeString;
	if (!(await pathExists(readmePath))) {
		const componentName = last(componentPath.split(path.sep));

		readmeString = `# ${componentName}\n`;
		await fs.writeFile(readmePath, readmeString);
	} else {
		readmeString = await fs.readFile(readmePath);
	}

	if (!/api-tables/.test(readmeString)) {
		readmeString += '\n\n<!-- api-tables:start -->\n<!-- api-tables:end -->\n';
		await fs.writeFile(readmePath, readmeString);
	}

	return readmePath;
}

async function filterPublicSubcomponents(componentPath, vueFiles) {
	const componentEntry = path.join(componentPath, 'index.js');
	const componentEntryContent = (await fs.readFile(componentEntry)).toString();

	return vueFiles.filter((vueFile) => componentEntryContent.match(path.basename(vueFile)));
}

async function parseComponent(componentPath) {
	const componentInfo = await vueDocs.parse(
		componentPath,
		{
			alias: developmentConfig.resolve.alias,
		},
	);

	if (componentInfo.props) {
		componentInfo.props = keyBy(componentInfo.props, 'name');
	}

	if (componentInfo.events) {
		componentInfo.events = keyBy(componentInfo.events, 'name');
	}

	if (componentInfo.tags.inheritAttrs) {
		const { description: inheritsFrom } = componentInfo.tags.inheritAttrs[0];

		if (inheritsFrom.startsWith('.')) {
			const inheritsFromPath = path.join(path.dirname(componentPath), inheritsFrom);
			const inherited = await parseComponent(inheritsFromPath);

			componentInfo.props = Object.assign(Object.create(inherited.props), componentInfo.props);
			if (inherited.tags.inheritAttrs) {
				componentInfo.tags.inheritAttrs.push(...inherited.tags.inheritAttrs);
			}
		}
	}

	if (componentInfo.tags.inheritListeners) {
		const { description: inheritsFrom } = componentInfo.tags.inheritListeners[0];

		if (inheritsFrom.startsWith('.')) {
			const inheritsFromPath = path.join(path.dirname(componentPath), inheritsFrom);
			const inherited = await parseComponent(inheritsFromPath);

			componentInfo.events = Object.assign(Object.create(inherited.events), componentInfo.events);
			if (inherited.tags.inheritListeners) {
				componentInfo.tags.inheritListeners.push(...inherited.tags.inheritListeners);
			}
		}
	}

	if (componentInfo.tags.inheritSlots) {
		const { description: inheritsFrom } = componentInfo.tags.inheritSlots[0];

		if (inheritsFrom.startsWith('.')) {
			const inheritsFromPath = path.join(path.dirname(componentPath), inheritsFrom);
			const inherited = await parseComponent(inheritsFromPath);

			componentInfo.slots = [
				...(inherited.slots || []),
				...(componentInfo.slots || []),
			];
			if (inherited.tags.inheritSlots) {
				componentInfo.tags.inheritSlots.push(...inherited.tags.inheritSlots);
			}
		}
	}

	return componentInfo;
}

async function interpolateTables(readmePath, apiTables) {
	let readme = await fs.readFile(readmePath);

	readme = commentMark(readme, {
		'api-tables': apiTables,
	});

	await fs.writeFile(readmePath, readme);
}

(async () => {
	const allVueFiles = await tinyGlob('./src/**/src/*.vue');
	const components = groupBy(
		allVueFiles,
		(vuePath) => vuePath.split(path.sep).slice(0, 3).join(path.sep),
	);

	await Promise.all(
		Object.entries(components).map(async ([componentPath, componentVueFiles]) => {
			const readmePath = await ensureReadme(componentPath);
			const publicSubcomponents = await filterPublicSubcomponents(componentPath, componentVueFiles);
			const hasMultiple = publicSubcomponents.length > 1;

			const apiTables = await Promise.all(
				publicSubcomponents.map(async (vueFilePath) => {
					const componentInfo = await parseComponent(vueFilePath);
					return await generateApiTables(componentInfo, hasMultiple);
				}),
			);

			interpolateTables(readmePath, apiTables.join('\n\n\n'));
		}),
	);
})();
