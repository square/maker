<template>
	<div>
		<table class="ButtonTable">
			<thead>
				<tr>
					<td />
					<th>
						Primary / Fill
					</th>
					<th>
						Secondary / Outline
					</th>
					<th>
						Tertiary / Ghost
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-button
							pattern="primary"
							size="large"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
						>
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-button
							pattern="primary"
							size="medium"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Small
					</th>
					<td>
						<m-button
							pattern="primary"
							size="small"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
						>
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Disabled
					</th>
					<td>
						<m-button
							pattern="primary"
							disabled
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							disabled
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							disabled
						>
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon + Text
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							<plus class="icon" />
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							<plus class="icon" />
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							<plus class="icon" />
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (stacked)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="stack"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="stack"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="stack"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (reversed)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="space-between"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="space-between"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="space-between"
						>
							{{ buttonText }}
							<template #information>
								{{ infoText }}
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Full width
					</th>
					<td>
						<m-button
							pattern="primary"
							full-width
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							full-width
						>
							{{ buttonText }}
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							full-width
						>
							{{ buttonText }}
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>

		<table class="ButtonTable">
			<thead>
				<tr>
					<td />
					<th>
						Primary / Fill
					</th>
					<th>
						Secondary / Outline
					</th>
					<th>
						Tertiary / Ghost
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Large
					</th>
					<td>
						<m-button
							pattern="primary"
							size="large"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="large"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="large"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Medium
					</th>
					<td>
						<m-button
							pattern="primary"
							size="medium"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="medium"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="medium"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Small
					</th>
					<td>
						<m-button
							pattern="primary"
							size="small"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							size="small"
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							size="small"
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Disabled
					</th>
					<td>
						<m-button
							pattern="primary"
							disabled
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							disabled
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							disabled
						>
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Icon + Text
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							<plus class="icon" />
							Button
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot
					</th>
					<td>
						<m-button
							pattern="primary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (stacked)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="stack"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Info slot (reversed)
					</th>
					<td>
						<m-button
							pattern="primary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							align="space-between"
						>
							Button
							<template #information>
								Information
							</template>
						</m-button>
					</td>
				</tr>
				<tr>
					<th>
						Full width
					</th>
					<td>
						<m-button
							pattern="primary"
							full-width
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="secondary"
							full-width
						>
							Button
						</m-button>
					</td>
					<td>
						<m-button
							pattern="tertiary"
							full-width
						>
							Button
						</m-button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import Plus from '@square/maker-icons/Plus';
import { MButton } from '@square/maker/components/Button';

export default {
	components: {
		MButton,
		Plus,
	},
	data() {
		return {
			buttonText: 'Button text that is long and may require truncation',
			infoText: 'Information text that is long and may require truncation',
		};
	},
};
</script>

<style scoped>
.ButtonTable {
	max-width: 100%;
	font-family: -apple-system, 'Helvetica Neue', sans-serif;
	border-collapse: separate;
	border-spacing: 16px;
}

button {
	max-width: 180px;
}

.icon {
	width: 16px;
	height: 16px;
}
</style>
