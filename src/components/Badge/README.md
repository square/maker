# Badge

Use Badge to quantify the number of notifications.

## Examples

Badges come with the following pre-defined patterns: primary, info, error, warning, success. They can be rendered with or without labels. Without a label the Badge will render as a simple notification dot. Badges can be rendered as standalone inline elements or can be positioned on top of any other component.

```vue
<template>
	<div>
		<table>
			<thead>
				<tr>
					<td />
					<th>
						primary
					</th>
					<th>
						info
					</th>
					<th>
						error
					</th>
					<th>
						warning
					</th>
					<th>
						success
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						with label
					</th>
					<td>
						<m-badge
							pattern="primary"
							label="label"
						/>
					</td>
					<td>
						<m-badge
							pattern="info"
							label="label"
						/>
					</td>
					<td>
						<m-badge
							pattern="error"
							label="label"
						/>
					</td>
					<td>
						<m-badge
							pattern="warning"
							label="label"
						/>
					</td>
					<td>
						<m-badge
							pattern="success"
							label="label"
						/>
					</td>
				</tr>
				<tr>
					<th>
						no label
					</th>
					<td>
						<m-badge
							pattern="primary"
						/>
					</td>
					<td>
						<m-badge
							pattern="info"
						/>
					</td>
					<td>
						<m-badge
							pattern="error"
						/>
					</td>
					<td>
						<m-badge
							pattern="warning"
						/>
					</td>
					<td>
						<m-badge
							pattern="success"
						/>
					</td>
				</tr>
				<tr>
					<th>
						medium size
					</th>
					<td>
						<m-badge
							pattern="primary"
							size="medium"
							label="medium"
						/>
					</td>
					<td>
						<m-badge
							pattern="info"
							size="medium"
							label="medium"
						/>
					</td>
					<td>
						<m-badge
							pattern="error"
							size="medium"
							label="medium"
						/>
					</td>
					<td>
						<m-badge
							pattern="warning"
							size="medium"
							label="medium"
						/>
					</td>
					<td>
						<m-badge
							pattern="success"
							size="medium"
							label="medium"
						/>
					</td>
				</tr>
				<tr>
					<th>
						small size
					</th>
					<td>
						<m-badge
							pattern="primary"
							size="small"
							label="small"
						/>
					</td>
					<td>
						<m-badge
							pattern="info"
							size="small"
							label="small"
						/>
					</td>
					<td>
						<m-badge
							pattern="error"
							size="small"
							label="small"
						/>
					</td>
					<td>
						<m-badge
							pattern="warning"
							size="small"
							label="small"
						/>
					</td>
					<td>
						<m-badge
							pattern="success"
							size="small"
							label="small"
						/>
					</td>
				</tr>
				<tr>
					<th>
						in button  w/label
					</th>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="primary"
								size="small"
								label="10+"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="info"
								size="small"
								label="10+"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="error"
								size="small"
								label="10+"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="warning"
								size="small"
								label="10+"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="success"
								size="small"
								label="10+"
							/>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						on button w/label
					</th>
					<td>
						<m-badge
							pattern="primary"
							size="small"
							label="10+"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="info"
							size="small"
							label="10+"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="error"
							size="small"
							label="10+"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="warning"
							size="small"
							label="10+"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="success"
							size="small"
							label="10+"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
				</tr>
				<tr>
					<th>
						in button no label
					</th>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="primary"
								size="small"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="info"
								size="small"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="error"
								size="small"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="warning"
								size="small"
							/>
						</m-button>
					</td>
					<td>
						<m-button pattern="primaryOutline">
							button
							<m-badge
								pattern="success"
								size="small"
							/>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						on button no label
					</th>
					<td>
						<m-badge
							pattern="primary"
							size="small"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="info"
							size="small"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="error"
							size="small"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="warning"
							size="small"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
					<td>
						<m-badge
							pattern="success"
							size="small"
						>
							<m-button pattern="primaryOutline">
								button
							</m-button>
						</m-badge>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { MButton } from '@square/maker/components/Button';
import { MBadge } from '@square/maker/components/Badge';

export default {
	components: {
		MBadge,
		MButton,
	},
};
</script>

<style scoped>
table {
	border-spacing: 8px;
}

td {
	text-align: center;
}
</style>
```

### Advanced

When positioning a Badge on top of another component, in order to position Badge correctly, the other component has to be a positioned component. A "positioned" component is any component with a non-`static` value for their `position` property, i.e. `relative`, `absolute`, `fixed`, `sticky`. To guarantee this, the Badge component adds the style `position: relative` to the component it is wrapping, which is fine for most components, but will break components that rely on having `absolute`, `fixed`, or `sticky` positioning. In those cases, you can add the prop `no-relative` to Badge to prevent it from overriding the component's position property.

```vue
<template>
	<div class="container">
		<m-badge label="badge">
			<div class="static box" />
		</m-badge>
		<m-badge label="badge">
			<div class="relative box" />
		</m-badge>
		<m-badge
			label="badge"
			no-relative
		>
			<div class="sticky box" />
		</m-badge>
		<m-badge
			label="badge"
			no-relative
		>
			<div class="absolute box" />
		</m-badge>
		<m-button
			pattern="primaryOutline"
			size="small"
			@click="toggleFixed"
		>
			{{ fixedText }} fixed
		</m-button>
		<m-badge
			v-if="showFixed"
			label="badge"
			no-relative
		>
			<div class="fixed box" />
		</m-badge>
		<div style="height: 200px;" />
	</div>
</template>

<script>
import { MBadge } from '@square/maker/components/Badge';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MBadge,
		MButton,
	},
	data() {
		return {
			showFixed: false,
		};
	},
	computed: {
		fixedText() {
			return this.showFixed ? 'hide' : 'show';
		},
	},
	methods: {
		toggleFixed() {
			this.showFixed = !this.showFixed;
		},
	},
};
</script>

<style scoped>
.container {
	position: relative;
	height: 200px;
	overflow-y: scroll;
}

.box {
	width: 80px;
	height: 80px;
	background-color: var(--maker-color-neutral-20, #555);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	font-size: 16px;
	border-radius: 8px;
	color: var(--maker-color-body, #fff);
	margin: 16px;
}

.static {
	position: static;
}
.static::before {
	content: 'static';
}

.relative {
	position: relative;
	top: 10px;
}
.relative::before {
	content: 'relative';
}

.absolute {
	position: absolute;
	top: 20px;
	right: 20px;
}
.absolute::before {
	content: 'absolute';
}

.fixed {
	position: fixed;
	bottom: 100px;
	right: 300px;
}
.fixed::before {
	content: 'fixed';
}

.sticky {
	position: sticky;
	top: 20px;
}
.sticky::before {
	content: 'sticky';
}
</style>
```

To render itself on top of another component, Badge customizes the component's `::after` pseudo-element by default. If your component relies on its own `::after` customizations to look and function properly, you can add the prop `pseudo-target="before"` on Badge so that it customizes the component's `::before` pseudo-element instead.

```vue
<!-- eslint-disable vue/singleline-html-element-content-newline, max-len -->
<template>
	<div>
		<p class="banner">this is a banner with normal text</p>
		<p class="loud banner">this is banner with loud text</p>
		<m-badge
			label="badge"
		>
			<p class="loud banner">this is a banner with loud text and with the default badge (notice '!!!' at end of text is missing, and badge's label is wrong)</p>
		</m-badge>
		<m-badge
			label="badge"
			pseudo-target="before"
		>
			<p class="loud banner">this is a banner with loud text and with the badge targeting the ::before pseudo-element (notice '!!!' at end of text is back, and badge's label is correct)</p>
		</m-badge>
	</div>
</template>

<script>
import { MBadge } from '@square/maker/components/Badge';

export default {
	components: {
		MBadge,
	},
};
</script>

<style scoped>
.banner {
	display: block;
	font-size: 18px;
	width: 400px;
	margin: 8px;
	padding: 8px;
	color: var(--maker-color-body, #fff);
	background-color: var(--maker-color-neutral-20, #555);
	border-radius: 8px;
}
.loud {
	text-transform: uppercase;
}
.loud::after {
	content: '!!!';
}
</style>
```


<!-- api-tables:start -->
## Props

Themable props* can be configured via the [Theme](#/Theme) component using the key `badge`.

| Prop          | Type      | Default     | Possible values                                                                                         | Description                                       |
| ------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| pattern*      | `string`  | —           | `'primary'`, `'error'`, `'success'`, `'warning'`, `'info'`, any custom pattern defined within the theme | pattern defined at theme level                    |
| label         | `string`  | —           | -                                                                                                       | badge's label text                                |
| size          | `string`  | `'medium'`  | `'small'`, `'medium'`                                                                                   | badge's size                                      |
| no-relative   | `boolean` | `false`     | -                                                                                                       | skip setting `position: relative` on default slot |
| pseudo-target | `string`  | `'after'`   | `'before'`, `'after'`                                                                                   | default slot's pseudo-element target              |
| bg-color*     | `string`  | `'#1b1b1b'` | -                                                                                                       | bg color, as a valid hex string                   |
| text-color*   | `string`  | `'#ffffff'` | -                                                                                                       | text color, as a valid hex string                 |


## Slots

| Slot    | Description                  |
| ------- | ---------------------------- |
| default | content to position badge on |
<!-- api-tables:end -->
