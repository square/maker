# Accordion

Use Accordion to display information which can be expanded or collapsed.

## Examples

### Basic

Accordions must have titles and can optionally have secondary info and content. To expand or collapse the Accordion the user must cick anywhere on the Accordion header. The Accordion starts collapsed by default.

```vue
<template>
	<m-accordion
		class="container"
		title="my accordion title"
		secondary="optional secondary info"
	>
		<div class="content">
			accordion content and stuff
		</div>
	</m-accordion>
</template>

<script>
import { MAccordion } from '@square/maker/components/Accordion';

export default {
	components: {
		MAccordion,
	},
};
</script>

<style scoped>
.container {
	max-width: 500px;
}
.content {
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
}
</style>
```

### Render opened by default

Add the prop `expanded` to Accordion so it renders opened by default.

```vue
<template>
	<m-accordion
		class="container"
		title="my default open accordion"
		secondary="optional secondary info"
		expanded
	>
		<div class="content">
			accordion content and stuff
		</div>
	</m-accordion>
</template>

<script>
import { MAccordion } from '@square/maker/components/Accordion';

export default {
	components: {
		MAccordion,
	},
};
</script>

<style scoped>
.container {
	max-width: 500px;
}
.content {
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
}
</style>
```

### Programmatic control

If necessary, Accordions can be controlled programmatically by passing a boolean value to its `v-model`. A `true` value will cause the Accordion to be expanded and a `false` value will cause the Accordion to be collapsed.

```vue
<template>
	<div class="container">
		<button @click="expanded = !expanded">
			external button (expanded: {{ expanded }})
		</button>
		<br><br>
		<m-accordion
			v-model="expanded"
			title="Programmatic Accordion"
			secondary="optional secondary info"
		>
			<div class="content">
				accordion content and stuff
			</div>
		</m-accordion>
	</div>
</template>

<script>
import { MAccordion } from '@square/maker/components/Accordion';

export default {
	components: {
		MAccordion,
	},
	data() {
		return {
			expanded: false,
		};
	},
};
</script>

<style scoped>
.container {
	max-width: 500px;
}
.content {
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
}
</style>
```

### Customizing title, secondary, & icon

Instead of using the `title` and `secondary` props, slots of the same names can be used. The `icon` slot can be used to customize the icon.

```vue
<template>
	<m-accordion
		v-model="expanded"
		class="container"
	>
		<template #title>
			<m-text
				pattern="title"
				font-style="italic"
			>
				Big Italic Title
			</m-text>
		</template>
		<template #secondary>
			<m-text pattern="paragraph">
				<m-icon name="info" />
				info text with info icon
			</m-text>
		</template>
		<template #icon>
			<minus
				v-if="expanded"
				class="icon"
			/>
			<plus
				v-else
				class="icon"
			/>
		</template>
		<div class="content">
			accordion content and stuff
		</div>
	</m-accordion>
</template>

<script>
import { MAccordion } from '@square/maker/components/Accordion';
import { MText } from '@square/maker/components/Text';
import { MIcon } from '@square/maker/components/Icon';
import Plus from '@square/maker-icons/Plus';
import Minus from '@square/maker-icons/Minus';

export default {
	components: {
		MAccordion,
		MText,
		MIcon,
		Plus,
		Minus,
	},
	data() {
		return {
			expanded: false,
		};
	},
};
</script>

<style scoped>
.container {
	max-width: 500px;
}
.content {
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
}
.icon {
	width: 24px;
	height: 24px;
}
</style>
```

### Accordion stack

If you'd like to stack multiple Accordions and have at most one expanded at a time (e.g. the others auto-collapse) then use the `expand-key` prop to set a unique key on each Accordion, and then that Accordion will only expand when the `expanded` prop is equal to the `expand-key` otherwise it will collapse, and this way you can orchestrate the expanding & collapsing of multiple Accordions in a stack with minimal overhead.

```vue
<template>
	<div class="container">
		<m-radio
			v-model="expandKey"
			name="accordion"
			value="1"
		>
			1st accordion
		</m-radio>
		<m-radio
			v-model="expandKey"
			name="accordion"
			value="2"
		>
			2nd accordion
		</m-radio>
		<m-radio
			v-model="expandKey"
			name="accordion"
			value="3"
		>
			3rd accordion
		</m-radio>
		<br><br>
		<m-accordion
			v-model="expandKey"
			expand-key="1"
			title="1st Accordion"
		>
			<div class="content">
				accordion content and stuff
			</div>
		</m-accordion>
		<m-divider class="divider" />
		<m-accordion
			v-model="expandKey"
			expand-key="2"
			title="2nd Accordion"
		>
			<div class="content">
				accordion content and stuff
			</div>
		</m-accordion>
		<m-divider class="divider" />
		<m-accordion
			v-model="expandKey"
			expand-key="3"
			title="3rd Accordion"
		>
			<div class="content">
				accordion content and stuff
			</div>
		</m-accordion>
	</div>
</template>

<script>
import { MRadio } from '@square/maker/components/Radio';
import { MAccordion } from '@square/maker/components/Accordion';
import { MDivider } from '@square/maker/components/Divider';

export default {
	components: {
		MAccordion,
		MRadio,
		MDivider,
	},
	data() {
		return {
			expandKey: '1',
		};
	},
};
</script>

<style scoped>
.container {
	max-width: 500px;
}
.content {
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
}
.divider {
	margin: 16px 0;
}
</style>
```


<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop       | Type             | Default | Possible values | Description                                                                           |
| ---------- | ---------------- | ------- | --------------- | ------------------------------------------------------------------------------------- |
| v-model    | `boolean|string` | —       | —               | if truthy or equal to expandKey the accordion will expand, otherwise it will collapse |
| expand-key | `string`         | —       | —               | used to orchestrate the collapsing & expanding of multiple accordions                 |
| title      | `string`         | `''`    | —               | accordion title, will be overriden if title slot is used                              |
| secondary  | `string`         | `''`    | —               | secondary info, will be overridden if secondary slot is used                          |


## Slots

| Slot      | Description                      |
| --------- | -------------------------------- |
| title     | title of accordion               |
| secondary | secondary info, goes under title |
| icon      | open & close icon                |
| default   | content to expand & collapse     |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Event            | Type | Description                                   |
| ---------------- | ---- | --------------------------------------------- |
| accordion:update | -    | emits updated expand value after state change |
<!-- api-tables:end -->
