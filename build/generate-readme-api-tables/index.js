/* eslint-disable max-len,no-prototype-builtins */
const vueDocs = require('vue-docgen-api');
const tinyGlob = require('tiny-glob');
const path = require('path');
const { promises: fs } = require('fs');
const {
 groupBy, last, keyBy, isNil, isString,
} = require('lodash');
const commentMark = require('comment-mark');
const generateApiTables = require('./generate-api-tables');
const developmentConfig = require('../webpack-development-config');
const defaultTheme = require('../../src/components/Theme/src/default-theme.cjs');

const DEFAULT_THEME = Object.freeze(defaultTheme());

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

function displayNameToThemeKey(displayName) {
	const lowercaseDisplayName = displayName.toLowerCase();
	if (DEFAULT_THEME[lowercaseDisplayName]) {
		return lowercaseDisplayName;
	}
	const truncateFormItem = lowercaseDisplayName.replace('formitem', '');
	if (DEFAULT_THEME[truncateFormItem]) {
		return truncateFormItem;
	}
	return undefined;
}

function stringify(value) {
	if (isNil(value) || value === '-') {
		return '-';
	}
	// value already stringified & single-quoted
	if (isString(value) && value.startsWith("'") && value.endsWith("'")) {
		return value;
	}
	let stringValue = JSON.stringify(value);
	// replace double quotes with single quotes
	if (stringValue.startsWith('"') && stringValue.endsWith('"')) {
		const ONE = 1;
		stringValue = `'${stringValue.slice(ONE, stringValue.length - ONE)}'`;
	}
	return stringValue;
}

function getComponentThemeDefaults(componentInfo) {
	return DEFAULT_THEME[displayNameToThemeKey(componentInfo.displayName)];
}

function enrichInfoWithDefaultThemeData(componentInfo) {
	const COMPONENT_THEME_DEFAULTS = getComponentThemeDefaults(componentInfo);
	if (!COMPONENT_THEME_DEFAULTS) {
		// component isn't themable, nothing to do
		return;
	}
	for (const [propName, propInfo] of Object.entries(componentInfo.props)) {
		const hasPropInThemeDefaults = COMPONENT_THEME_DEFAULTS.hasOwnProperty(propName);
		if (hasPropInThemeDefaults) {
			// PROP_DEFAULT_THEME_VALUE can be undefined or null
			const PROP_DEFAULT_THEME_VALUE = COMPONENT_THEME_DEFAULTS[propName];
			if (propInfo.defaultValue?.value === 'undefined') {
				const RESOLVED_THEME_VALUE = DEFAULT_THEME.resolve(PROP_DEFAULT_THEME_VALUE);
				propInfo.defaultValue = {
					func: false,
					value: !isNil(RESOLVED_THEME_VALUE) ? stringify(RESOLVED_THEME_VALUE) : 'undefined',
				};
				propInfo.themable = true;
			} else {
				throw new Error(`component ${componentInfo.displayName} has a default theme value ${PROP_DEFAULT_THEME_VALUE} for prop ${propName} but it will never get this value because it has a local default value of ${JSON.stringify(propInfo.defaultValue?.value)}`);
			}
		}
		if (propName === 'pattern') {
			propInfo.themable = true;
			const COMPONENT_THEME_DEFAULT_PATTERNS = COMPONENT_THEME_DEFAULTS.patterns;
			if (COMPONENT_THEME_DEFAULT_PATTERNS) {
				const COMPONENT_THEME_DEFAULT_PATTERN_NAMES = Object.keys(COMPONENT_THEME_DEFAULTS.patterns);
				if (COMPONENT_THEME_DEFAULT_PATTERN_NAMES.length > 0) {
					propInfo.values = COMPONENT_THEME_DEFAULT_PATTERN_NAMES;
				}
			}
		}
	}
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

			componentInfo.props = {
				...(inherited.props || {}),
				...(componentInfo.props || {}),
			};
			const noProps = 0;
			if (Object.keys(componentInfo.props).length === noProps) {
				delete componentInfo.props;
			}
			if (inherited.tags.inheritAttrs) {
				componentInfo.tags.inheritAttrs.push(...inherited.tags.inheritAttrs);
			}
		}
	}

	if (componentInfo.tags.inheritListeners) {
		const firstInheritedListenerIndex = 0;
		const { description: inheritsFrom } = componentInfo.tags
			.inheritListeners[firstInheritedListenerIndex];

		if (inheritsFrom.startsWith('.')) {
			const inheritsFromPath = path.join(path.dirname(componentPath), inheritsFrom);
			const inherited = await parseComponent(inheritsFromPath);

			componentInfo.events = {
				...(inherited.events || {}),
				...(componentInfo.events || {}),
			};
			const noEvents = 0;
			if (Object.keys(componentInfo.events).length === noEvents) {
				delete componentInfo.events;
			}
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
			const noSlots = 0;
			if (componentInfo.slots.length === noSlots) {
				delete componentInfo.slots;
			}
			if (inherited.tags.inheritSlots) {
				componentInfo.tags.inheritSlots.push(...inherited.tags.inheritSlots);
			}
			if (componentInfo.slots) {
				// filter out parsed proxy slots
				componentInfo.slots = componentInfo.slots.filter((slot) => {
					const isDefault = slot.name === 'default';
					const isScoped = slot.scoped;
					const hasProxyBinding = slot.bindings?.length && slot.bindings[0].name === 'name';
					const isProxySlot = isDefault && isScoped && hasProxyBinding;
					return !isProxySlot;
				});
			}
		}
	}

	if (componentInfo.slots) {
		// filter out private slots
		componentInfo.slots = componentInfo.slots.filter((slot) => slot.tags?.access[0]?.description !== 'private');
	}

	// componentInfo is modified in place
	enrichInfoWithDefaultThemeData(componentInfo);

	if (componentInfo.props) {
		for (const propInfo of Object.values(componentInfo.props)) {
			if (propInfo.values) {
				propInfo.values = propInfo.values.map((value) => stringify(value));
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
	const sliceStart = 0;
	const sliceEnd = 3;
	const components = groupBy(
		allVueFiles,
		(vuePath) => vuePath.split(path.sep).slice(sliceStart, sliceEnd).join(path.sep),
	);

	await Promise.all(
		Object.entries(components).map(async ([componentPath, componentVueFiles]) => {
			const readmePath = await ensureReadme(componentPath);
			const publicSubcomponents = await filterPublicSubcomponents(componentPath, componentVueFiles);
			const one = 1;
			const hasMultiple = publicSubcomponents.length > one;

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
