const markdownTable = require('markdown-table');
const { kebabCase, get } = require('lodash');
const assert = require('assert');

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

function getPropsTable({ props, tags }, tablePrefix) {
	let inheritsFrom = (tags.inheritAttrs || []).find(({ description }) => !description.startsWith('.'));

	if (!props && !inheritsFrom) { return ''; }

	if (inheritsFrom && inheritsFrom.description) {
		inheritsFrom = `Supports attributes from ${tagToMdnLink(inheritsFrom.description)}.`;
	}

	return section(
		`${tablePrefix ? `${tablePrefix} ` : ''}Props`,
		[
			inheritsFrom,
			props ? markdownTable([
				['Prop', 'Type', 'Default', 'Possible values', 'Description'],
				...mapIn(props, (prop) => {
					const defaultValue = get(prop, 'tags.default[0].description') || get(prop, 'defaultValue.value');
					return [
						kebabCase(prop.name) + (prop.required ? '*' : ''),
						prop.type.name ? code(prop.type.name) : '—',
						(defaultValue !== undefined && defaultValue !== 'undefined') ? code(defaultValue) : '—',
						prop.values ? prop.values.map((value) => code(value)).join(', ') : '—',
						prop.description || '—',
					];
				}),
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
