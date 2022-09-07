# Vertical Divider

Use VerticalDivider to vertically separate similar content.

```vue
<template>
	<div>
		vertical divider 👉
		<m-vertical-divider style="height: 100px;" />
		👈 vertical divider
	</div>
</template>

<script>
import { MVerticalDivider } from '@square/maker/components/VerticalDivider';

export default {
	components: {
		MVerticalDivider,
	},
};
</script>
```

## Examples

The most common use-case would be to visually separate a row of TextButtons since they do not have strong visual separation on their own.


```vue
<template>
	<div>
		❌ row of textbuttons (visually ambiguous)
		<br>
		<m-text-button>
			add
		</m-text-button>
		<m-text-button>
			remove
		</m-text-button>
		<m-text-button>
			clear
		</m-text-button>
		<m-text-button>
			reset
		</m-text-button>
		<br>
		<br>
		✅ row of textbuttons with vertical dividers (clear visual separation)
		<br>
		<m-text-button>
			add
		</m-text-button>
		<m-vertical-divider class="divider" />
		<m-text-button>
			remove
		</m-text-button>
		<m-vertical-divider class="divider" />
		<m-text-button>
			clear
		</m-text-button>
		<m-vertical-divider class="divider" />
		<m-text-button>
			reset
		</m-text-button>
		<br>
		<br>
	</div>
</template>

<script>
import { MTextButton } from '@square/maker/components/TextButton';
import { MVerticalDivider } from '@square/maker/components/VerticalDivider';

export default {
	components: {
		MVerticalDivider,
		MTextButton,
	},
};
</script>

<style scoped>
.divider {
	margin: 0 4px;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
