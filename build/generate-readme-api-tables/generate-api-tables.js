const markdownTable = require('markdown-table');
const { kebabCase, get } = require('lodash');
const assert = require('assert');
const defaultTheme = require('../../src/components/Theme/src/default-theme.cjs');

const DEFAULT_THEME = Object.freeze(defaultTheme());

const code = (string) => `\`${string}\``;
const section = (title, content) => `## ${title}\n\n${content.filter(Boolean).join('\n\n')}`;

const mapIn = (object, iteratee) => {
	const array = [];
	for (const prop in object) { // eslint-disable-line no-restricted-syntax, guard-for-in
		array.push(iteratee(object[prop]));
	}
	return array;
};

function tagToMdnLink(tag) {
	const parseTag = tag.match(/^([\w-]+)(?:\[type="(\w+)"])?$/);
	assert(parseTag, `Tag "${tag}" is not a valid tag`);
	const [, tagName, tagType] = parseTag;
	if (!tagType) {
		return `[\`<${tagName}>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tagName})`;
	}

	// Has tag type
	return `[\`<${tagName} type="${tagType}">\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tagName}/${tagType})`;
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

function getPropName(propInfo) {
	return kebabCase(propInfo.name) + (propInfo.themable ? '*' : '');
}

function getPropType(propInfo) {
	return propInfo.type.name ? code(propInfo.type.name) : '—';
}

function getPropDefaultValue(propInfo) {
	const defaultValue = get(propInfo, 'tags.default[0].description') || get(propInfo, 'defaultValue.value');
	return (defaultValue !== undefined && defaultValue !== 'undefined') ? code(defaultValue) : '—';
}

function getPropPossibleValues(propInfo) {
	const PATTERN_APPEND_MSG = 'any custom pattern defined within the theme';
	if (!propInfo.values || propInfo.values.length === 0) {
		if (propInfo.name === 'pattern') {
			return PATTERN_APPEND_MSG;
		}
		return '-';
	}
	let possibleValues = propInfo.values.map((value) => code(value)).join(', ');
	if (propInfo.name === 'pattern') {
		possibleValues += `, ${PATTERN_APPEND_MSG}`;
	}
	return possibleValues;
}

function getPropDescription(propInfo) {
	return propInfo.description || '-';
}

function getPropsTable({ displayName, props, tags }, tablePrefix) {
	let inheritsFrom = (tags.inheritAttrs || []).find(({ description }) => !description.startsWith('.'));

	if (!props && !inheritsFrom) { return ''; }

	if (inheritsFrom && inheritsFrom.description) {
		inheritsFrom = `Supports attributes from ${tagToMdnLink(inheritsFrom.description)}.`;
	}

	const hasThemableProps = props && Object.values(props).find((propInfo) => propInfo.themable);
	const themeKey = displayNameToThemeKey(displayName);
	const description = hasThemableProps ? `Themable props* can be configured via the [Theme](#/Theme) component using the key ${code(themeKey)}.` : undefined;

	return section(
		`${tablePrefix ? `${tablePrefix} ` : ''}Props`,
		[
			inheritsFrom,
			description,
			props ? markdownTable([
				['Prop', 'Type', 'Default', 'Possible values', 'Description'],
				...mapIn(props, (propInfo) => [
					getPropName(propInfo),
					getPropType(propInfo),
					getPropDefaultValue(propInfo),
					getPropPossibleValues(propInfo),
					getPropDescription(propInfo),
				]),
			]) : '',
		],
	);
}

function getSlotsTable({ slots }, tablePrefix) {
	if (!slots) { return ''; }

	return section(
		`${tablePrefix ? `${tablePrefix} ` : ''}Slots`,
		[
			markdownTable([
				['Slot', 'Description'],
				...mapIn(slots, (slot) => [
					slot.name,
					slot.description || '—',
				]),
			]),
		],
	);
}

function getEventsTable({ events, tags }, tablePrefix) {
	let inheritsFrom = (tags.inheritListeners || []).find(({ description }) => !description.startsWith('.'));

	if (!events && !inheritsFrom) { return ''; }

	if (inheritsFrom && inheritsFrom.description) {
		inheritsFrom = `Supports events from ${tagToMdnLink(inheritsFrom.description)}.`;
	}

	return section(
		`${tablePrefix ? `${tablePrefix} ` : ''}Events`,
		[
			inheritsFrom,
			events ? markdownTable([
				['Event', 'Type', 'Description'],
				...mapIn(events, (event) => {
					const eventType = get(event, 'properties[0].type.names', []).join('|');
					return [
						event.name,
						eventType ? `\`${eventType}\`` : '-',
						event.description || '—',
					];
				}),
			]) : '',
		],
	);
}

function getMethodsTable({ methods }, tablePrefix) {
	if (!methods) { return ''; }

	return section(
		`${tablePrefix ? `${tablePrefix} ` : ''}Methods`,
		[
			markdownTable([
				['Method', 'Description'],
				...mapIn(methods, (method) => [
					method.name,
					method.description || '—',
				]),
			]),
		],
	);
}

async function generateApiTables(componentInfo, prefixName) {
	if (prefixName) {
		prefixName = componentInfo.displayName;
	}

	return [
		getPropsTable(componentInfo, prefixName),
		getSlotsTable(componentInfo, prefixName),
		getEventsTable(componentInfo, prefixName),
		getMethodsTable(componentInfo, prefixName),
	].filter(Boolean).join('\n\n\n');
}

module.exports = generateApiTables;
