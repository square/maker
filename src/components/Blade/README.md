# Blade

Use the Blade component to open a blade.

```vue
<template>
	<div>
		<demo />
		<m-blade-layer />
	</div>
</template>

<script>
import { MBladeLayer } from '@square/maker/components/Blade';
import Demo from 'doc/Demo.vue';

export default {
	components: {
		Demo,
		MBladeLayer,
	},

	mixins: [
		MBladeLayer.apiMixin,
	],
};
</script>
```

_Demo.vue_

```vue
<template>
	<div>
		<button @click="openBlade">
			Open blade
		</button>
	</div>
</template>

<script>
import { bladeApi } from '@square/maker/components/Blade';
import DemoBlade from 'doc/DemoBlade.vue';

export default {
	inject: {
		bladeApi,
	},

	methods: {
		openBlade() {
			this.bladeApi.open(() => <DemoBlade />);
		},
	},
};
</script>
```


_DemoBlade.vue_

```vue
<template>
	<m-blade>
		blade content

		<button @click="bladeApi.close()">
			Close
		</button>
	</m-blade>
</template>

<script>
import { MBlade, bladeApi } from '@square/maker/components/Blade';

export default {
	components: {
		MBlade,
	},

	inject: {
		bladeApi,
	},
};
</script>
```


<!-- api-tables:start -->
## Blade Slots

| Slot    | Description   |
| ------- | ------------- |
| default | blade content |



<!-- api-tables:end -->
