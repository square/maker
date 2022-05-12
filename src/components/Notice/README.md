# Notice

Use Notice to notify users of things.

## Examples

Notice has the following built-in patterns: error, warning, success, info.

```vue
<template>
	<div class="spaceout">
		<m-notice pattern="error">
			Error inline message
		</m-notice>
		<m-notice pattern="success">
			Success inline message
		</m-notice>
		<m-notice pattern="warning">
			Warning inline message
		</m-notice>
		<m-notice pattern="info">
			Info inline message
		</m-notice>

		<m-notice
			pattern="error"
			variant="block"
		>
			Error block message
			<template #actions>
				<m-text-button pattern="error">
					Button
				</m-text-button>
				<m-text-button pattern="error">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="success"
			variant="block"
		>
			Success block message
			<template #actions>
				<m-text-button pattern="success">
					Button
				</m-text-button>
				<m-text-button pattern="success">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="warning"
			variant="block"
		>
			Warning block message
			<template #actions>
				<m-text-button pattern="warning">
					Button
				</m-text-button>
				<m-text-button pattern="warning">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
		<m-notice
			pattern="info"
			variant="block"
		>
			Info block message
			<template #actions>
				<m-text-button pattern="info">
					Button
				</m-text-button>
				<m-text-button pattern="info">
					Dismiss
				</m-text-button>
			</template>
		</m-notice>
	</div>
</template>

<script>
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';

export default {
	components: {
		MNotice,
		MTextButton,
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
.spaceout {
	max-width: 400px;
	padding: 16px;
}
</style>
```

### Dark Theme

Suggested colors for dark theme.

```vue
<template>
	<m-theme
		:theme="theme"
	>
		background color
		<input
			v-model="bgColor"
			type="color"
		>
		<br>
		min contrast ratio
		<input
			v-model="minContrastRatio"
			type="range"
			min="1.0"
			max="6.0"
			step="0.1"
		>
		{{ minContrastRatio }}
		<br>
		{{ JSON.stringify(theme) }}
		<div class="spaceout">
			<m-notice pattern="error">
				Error inline message
			</m-notice>
			<m-notice pattern="success">
				Success inline message
			</m-notice>
			<m-notice pattern="warning">
				Warning inline message
			</m-notice>
			<m-notice pattern="info">
				Info inline message
			</m-notice>

			<m-notice
				pattern="error"
				variant="block"
			>
				Error block message
				<template #actions>
					<m-text-button pattern="error">
						Button
					</m-text-button>
					<m-text-button pattern="error">
						Dismiss
					</m-text-button>
				</template>
			</m-notice>
			<m-notice
				pattern="success"
				variant="block"
			>
				Success block message
				<template #actions>
					<m-text-button pattern="success">
						Button
					</m-text-button>
					<m-text-button pattern="success">
						Dismiss
					</m-text-button>
				</template>
			</m-notice>
			<m-notice
				pattern="warning"
				variant="block"
			>
				Warning block message
				<template #actions>
					<m-text-button pattern="warning">
						Button
					</m-text-button>
					<m-text-button pattern="warning">
						Dismiss
					</m-text-button>
				</template>
			</m-notice>
			<m-notice
				pattern="info"
				variant="block"
			>
				Info block message
				<template #actions>
					<m-text-button pattern="info">
						Button
					</m-text-button>
					<m-text-button pattern="info">
						Dismiss
					</m-text-button>
				</template>
			</m-notice>
		</div>
	</m-theme>
</template>

<script>
import chroma from 'chroma-js';
import { MNotice } from '@square/maker/components/Notice';
import { MTextButton } from '@square/maker/components/TextButton';
import { MTheme } from '@square/maker/components/Theme';

// generation logic
const IS_LIGHT_THRESHOLD = 0.32;
const RATIOS = {
	light: {
		10: 0.05,
		20: 0.155,
		80: 0.527,
		90: 0.9,
	},
	dark: {
		10: 0.255,
		20: 0.37,
		80: 0.55,
		90: 0.95,
	},
};

function contrastColors(bgHex, minContrastRatioString) {
	const isLight = chroma(bgHex).luminance() > IS_LIGHT_THRESHOLD;
	const contrastColor = isLight ? '#000000' : '#ffffff';
	const levels = isLight ? RATIOS.light : RATIOS.dark;
	const colors = {
		background: bgHex,
		'neutral-0': isLight ? '#ffffff' : '#000000',
		'neutral-100': !isLight ? '#ffffff' : '#000000',
	};
	colors.body = colors['neutral-100'];

	Object.entries(levels).forEach(([name, level]) => {
		colors[`neutral-${name}`] = chroma.mix(
			bgHex,
			contrastColor,
			level,
			'lab',
		).hex();
	});

	if (isLight) {
		colors.critical = {
			fill: '#cd2026',
			text: '#a82826',
			subtle: '#f6eceb',
		};
		colors.warning = {
			fill: '#ffbf00',
			text: '#7e662a',
			subtle: '#f9eecf',
		};
		colors.success = {
			fill: '#008000',
			text: '#0a7A06',
			subtle: '#ebf1eb',
		};
	} else {
		colors.critical = {
			fill: '#cd2026',
			text: '#ff7566',
			subtle: colors['neutral-10'],
		};
		colors.warning = {
			fill: '#ffbf00',
			text: '#ffbf00',
			subtle: colors['neutral-10'],
		};
		colors.success = {
			fill: '#008000',
			text: '#64cc52',
			subtle: colors['neutral-10'],
		};
	}

	const BASE_TEN = 10;
	const minContrastRatio = Number.parseFloat(minContrastRatioString, BASE_TEN);

	for (const colorType of ['critical', 'warning', 'success']) {
		if (chroma.contrast(colors[colorType].text, colors.background) < minContrastRatio) {
			if (isLight) {
				colors[colorType].text = '#000000';
				colors[colorType].fill = '#000000';
			} else {
				colors[colorType].text = '#ffffff';
				colors[colorType].fill = '#ffffff';
			}
		}
	}

	return {
		...colors,
		elevation: isLight ? '#ffffff' : colors['neutral-20'],
		overlay: isLight ? 'rgba(0, 0, 0, 0.32)' : 'rgba(255, 255, 255, 0.32)',
	};
}

export default {
	components: {
		MNotice,
		MTextButton,
		MTheme,
	},
	data() {
		return {
			bgColor: '#000000',
			minContrastRatio: '4.0',
		};
	},
	computed: {
		theme() {
			return {
				colors: contrastColors(this.bgColor, this.minContrastRatio),
			};
		},
	},
};
</script>

<style scoped>
.spaceout > * {
	margin-bottom: 16px;
}
.spaceout > *:last-child {
	margin-bottom: 0;
}
.spaceout {
	max-width: 400px;
	padding: 16px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop       | Type     | Default    | Possible values                       | Description                        |
| ---------- | -------- | ---------- | ------------------------------------- | ---------------------------------- |
| pattern    | `string` | —          | —                                     | pattern defined at theme level     |
| type       | `string` | —          | `error`, `success`, `warning`, `info` | type of notice                     |
| variant    | `string` | `'inline'` | `inline`, `block`                     | notice variant                     |
| icon-color | `string` | —          | —                                     | icon color                         |
| color      | `string` | —          | —                                     | text color for inline notices      |
| bg-color   | `string` | —          | —                                     | background color for block notices |


## Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | notice content        |
| actions | put text buttons here |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
