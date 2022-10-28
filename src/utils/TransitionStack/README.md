# Transition Stack

You can use MTransitionStack when you have a group of items which need to be rendered in a vertical stack and items can dynamically enter or leave the group.

## Examples

In order for MTransitionStack to animate items correctly they must be keyed and must have a `static` or `relative` value for their `position` property and must have a `all {duration}s` value for their `transition` property. Otherwise any other values for any other properties should work fine (probably).

How items are animated into the stack can be controlled via the `transition-from` prop which can take values: `bottom` (default), `top`, `left`', `right`. The transition duration (which controls how fast items animate when they enter the stack, move within the stack, and leave the stack) can be controlled by modifying the `all {duration}s` value on the `transition` property of the items themselves.

```vue
<template>
	<div class="demo">
		<div class="buttons">
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="insertItem"
			>
				insert randomly
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="removeItem"
			>
				remove randomly
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="cycleTransitionFrom"
			>
				transition from {{ transitionFrom }}
			</m-button>
			<br>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="cycleTransitionDuration"
			>
				transition duration {{ transitionDuration }}s
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="cycleAlign"
			>
				align {{ align }}
			</m-button>
		</div>
		<m-transition-stack
			class="stack"
			:before-enter-class="beforeEnterClass"
			:style="{
				alignItems: align,
			}"
		>
			<div
				v-for="item in items"
				:key="item.key"
				class="item"
				:style="{
					...item.style,
					transition: `all ${transitionDuration}s`,
				}"
			>
				{{ item.text }}
			</div>
		</m-transition-stack>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MTransitionStack } from '@square/maker/utils/TransitionStack';

function randomInt(exclusiveMax) {
	return Math.floor(Math.random() * exclusiveMax);
}

function randomIntWithin(inclusiveMin, inclusiveMax) {
	const ONE = 1;
	const range = inclusiveMax - inclusiveMin;
	return inclusiveMin + randomInt(range + ONE);
}

function randomIndex(items) {
	return randomInt(items.length);
}

function insertRandomly(item, items) {
	const index = randomIndex(items);
	items.splice(index, 0, item);
}

function removeRandomly(items) {
	const ONE = 1;
	const index = randomIndex(items);
	items.splice(index, ONE);
}

function randomKey() {
	const HEXADECIMAL_RADIX = 36;
	const SLICE_START = 2;
	const SLICE_END = 12;
	return Math
		.random()
		.toString(HEXADECIMAL_RADIX)
		.slice(SLICE_START, SLICE_END);
}

let counter = 0;

function randomText() {
	const ONE = 1;
	counter += ONE;
	return `item ${counter}`;
}

function randomItem() {
	const key = randomKey();
	const text = randomText();
	const CHANNEL_START = 160;
	const CHANNEL_END = 230;
	const r = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const g = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const b = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const HEIGHT_START = 20;
	const HEIGHT_END = 80;
	const h = randomIntWithin(HEIGHT_START, HEIGHT_END);
	const WIDTH_START = 250;
	const WIDTH_END = 400;
	const w = randomIntWithin(WIDTH_START, WIDTH_END);
	const style = {
		backgroundColor: `rgb(${r}, ${g}, ${b})`,
		height: `${h}px`,
		width: `${w}px`,
	};
	return {
		key,
		text,
		style,
	};
}

const transitionFroms = [
	'bottom',
	'top',
	'left',
	'right',
];

const aligns = [
	'center',
	'flex-start',
	'flex-end',
];

function cycle(current, available) {
	const STEP = 1;
	const currentIndex = available.indexOf(current);
	const nextIdx = (currentIndex + STEP) % available.length;
	return available[nextIdx];
}

export default {
	components: {
		MTransitionStack,
		MButton,
	},

	data() {
		return {
			align: 'center',
			transitionFrom: 'bottom',
			transitionDuration: 0.5,
			items: [],
		};
	},

	computed: {
		beforeEnterClass() {
			return this.$s[`fade_${this.transitionFrom}`];
		},
	},

	methods: {
		insertItem() {
			const item = randomItem();
			insertRandomly(item, this.items);
		},
		removeItem() {
			removeRandomly(this.items);
		},
		cycleTransitionFrom() {
			this.transitionFrom = cycle(
				this.transitionFrom,
				transitionFroms,
			);
		},
		cycleTransitionDuration() {
			const START = 0.25;
			const STEP = 0.25;
			const END = 1.25;
			const current = this.transitionDuration;
			let next = (current + STEP) % END;
			if (next === 0) {
				next = START;
			}
			this.transitionDuration = next;
		},
		cycleAlign() {
			this.align = cycle(
				this.align,
				aligns,
			);
		},
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	align-items: center;
	flex-direction: column;
}
button {
	cursor: pointer;
}
.stack {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.item {
	border-radius: 8px;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.4);
	margin: 8px 0;
	transition: all 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<style module="$s">
.fade_top,
.fade_bottom,
.fade_left,
.fade_right {
	opacity: 0;
}
.fade_top {
	transform: translateY(-50%);
}
.fade_bottom {
	transform: translateY(50%);
}
.fade_left {
	transform: translateX(-50%);
}
.fade_right {
	transform: translateX(50%);
}
</style>
```

It's possible to turn MTransitionStack into a full-screen overlay with `position: fixed` and `pointer-events: none` styles on it. If the items are interactive then `pointer-events: auto` should be added back to them. Where the stack is positioned on the screen can be controlled with simple CSS flex properties. How the items are added & removed from the stack can be controlled with JS. How the items transition can be controlled via their `transition` property and via the `transition-from` prop on the MTransitionStack component. Example illustrates all of these techniques:

```vue
<template>
	<div class="demo">
		<div class="buttons">
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="insertItem"
			>
				add item
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="removeItem"
			>
				remove item
			</m-button>
			<m-button
				size="small"
				pattern="primaryOutline"
				@click="cyclePosition"
			>
				position {{ position }}
			</m-button>
		</div>
		<m-transition-stack
			class="stack"
			:before-enter-class="beforeEnterClass"
			:style="stackStyle"
		>
			<div
				v-for="item in items"
				:key="item.key"
				class="item"
				:style="item.style"
			>
				{{ item.text }}
			</div>
		</m-transition-stack>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MTransitionStack } from '@square/maker/utils/TransitionStack';

function randomInt(exclusiveMax) {
	return Math.floor(Math.random() * exclusiveMax);
}

function randomIntWithin(inclusiveMin, inclusiveMax) {
	const ONE = 1;
	const range = inclusiveMax - inclusiveMin;
	return inclusiveMin + randomInt(range + ONE);
}

function randomKey() {
	const HEXADECIMAL_RADIX = 36;
	const SLICE_START = 2;
	const SLICE_END = 12;
	return Math
		.random()
		.toString(HEXADECIMAL_RADIX)
		.slice(SLICE_START, SLICE_END);
}

let counter = 0;

function randomText() {
	const ONE = 1;
	counter += ONE;
	return `item ${counter}`;
}

function randomItem() {
	const key = randomKey();
	const text = randomText();
	const CHANNEL_START = 160;
	const CHANNEL_END = 230;
	const r = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const g = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const b = randomIntWithin(CHANNEL_START, CHANNEL_END);
	const HEIGHT_START = 20;
	const HEIGHT_END = 80;
	const h = randomIntWithin(HEIGHT_START, HEIGHT_END);
	const WIDTH_START = 250;
	const WIDTH_END = 400;
	const w = randomIntWithin(WIDTH_START, WIDTH_END);
	const style = {
		backgroundColor: `rgb(${r}, ${g}, ${b})`,
		height: `${h}px`,
		width: `${w}px`,
	};
	return {
		key,
		text,
		style,
	};
}

const positions = [
	'bottom',
	'bottom-left',
	'top-left',
	'top',
	'top-right',
	'bottom-right',
];

function cycle(current, available) {
	const STEP = 1;
	const currentIndex = available.indexOf(current);
	const nextIdx = (currentIndex + STEP) % available.length;
	return available[nextIdx];
}

export default {
	components: {
		MTransitionStack,
		MButton,
	},

	data() {
		return {
			position: 'bottom',
			items: [],
		};
	},

	computed: {
		stackAlign() {
			switch (this.position) {
			case 'top-left':
			case 'bottom-left':
				return 'flex-start';
			case 'top-right':
			case 'bottom-right':
				return 'flex-end';
			case 'top':
			case 'bottom':
			default:
				return 'center';
			}
		},
		stackDirection() {
			switch (this.position) {
			case 'top':
			case 'top-left':
			case 'top-right':
				return 'column-reverse';
			case 'bottom':
			case 'bottom-left':
			case 'bottom-right':
			default:
				return 'column';
			}
		},
		beforeEnterClass() {
			return this.$s[`fade_${this.transitionFrom}`];
		},
		stackStyle() {
			return {
				flexDirection: this.stackDirection,
				alignItems: this.stackAlign,
			};
		},
		transitionFrom() {
			switch (this.position) {
			case 'top-left':
			case 'bottom-left':
				return 'left';
			case 'top-right':
			case 'bottom-right':
				return 'right';
			case 'top':
				return 'top';
			case 'bottom':
			default:
				return 'bottom';
			}
		},
	},

	methods: {
		insertItem() {
			const item = randomItem();
			this.items.push(item);
		},
		removeItem() {
			this.items.shift();
		},
		cyclePosition() {
			this.position = cycle(
				this.position,
				positions,
			);
		},
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	align-items: center;
	flex-direction: column;
}
button {
	cursor: pointer;
}
.stack {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	pointer-events: none;
	padding: 0 8px;
}
.item {
	border-radius: 8px;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.4);
	margin: 8px 0;
	transition: all 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<style module="$s">
.fade_top,
.fade_bottom,
.fade_left,
.fade_right {
	opacity: 0;
}
.fade_top {
	transform: translateY(-50%);
}
.fade_bottom {
	transform: translateY(50%);
}
.fade_left {
	transform: translateX(-50%);
}
.fade_right {
	transform: translateX(50%);
}
</style>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop               | Type     | Default | Possible values | Description                                      |
| ------------------ | -------- | ------- | --------------- | ------------------------------------------------ |
| before-enter-class | `string` | —       | —               | how to animate the stack items before they enter |


## Slots

| Slot    | Description |
| ------- | ----------- |
| default | —           |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
