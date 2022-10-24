<template>
	<div
		:class="{
			[$s.ImagePickerInputContainer]: true,
			[$s.isDragged]: dragged,
		}"
		role="button"
		tabindex="0"
		@click="$refs.input.click()"
		@keydown.space.enter.prevent="$refs.input.click()"
		@drop.prevent="handleDrop($event)"
		@dragenter.prevent="setDragged(true)"
		@dragover.prevent="setDragged(true)"
		@dragleave.prevent="setDragged(false)"
	>
		<input
			ref="input"
			:class="$s.ImagePickerInput"
			type="file"
			v-bind="$attrs"
			@change="addImages"
		>
		<m-icon
			v-if="dragged"
			name="arrowUp"
			size="large"
		/>
		<m-icon
			v-else
			name="plus"
			size="medium"
		/>
	</div>
</template>

<script>
import { MIcon } from '@square/maker/components/Icon';
import {
	isEqual,
	uniqWith,
	escapeRegExp,
	partition,
} from 'lodash';

const getEntry = (item) => {
	if (item.getAsEntry) {
		return item.getAsEntry();
	}

	if (item.webkitGetAsEntry) {
		return item.webkitGetAsEntry();
	}

	return undefined;
};

const getEntryFile = (entry) => new Promise((resolve, reject) => {
	entry.file(resolve, reject);
});
const readEntries =	(reader) => new Promise((resolve, reject) => {
	reader.readEntries(resolve, reject);
});

const getAllEntries = async (reader, aggregated = []) => {
	const entries = await readEntries(reader);
	if (entries.length === 0) {
		return aggregated;
	}

	return getAllEntries(reader, aggregated.concat(entries));
};

async function traverseEntry(entry) {
	if (entry) {
		try {
			if (entry.isFile) {
				return await getEntryFile(entry);
			}

			if (entry.isDirectory) {
				const entries = await getAllEntries(entry.createReader());

				return Promise.all(entries.map((innerEntry) => traverseEntry(innerEntry)));
			}
		} catch {
			return undefined;
		}
	}

	return undefined;
}

export default {
	components: {
		MIcon,
	},

	data() {
		return {
			dragged: false,
		};
	},

	methods: {
		addImages(fileEvent) {
			this.emitFiles([...fileEvent.target.files]);
		},

		setDragged(dragged) {
			this.dragged = dragged;
		},

		async handleDrop(event) {
			this.setDragged(false);

			if (event.dataTransfer.items) {
				const fileEntries = await Promise.all(
					[...event.dataTransfer.items]
						.map((item) => traverseEntry(getEntry(item))),
				);

				const wBuffers = await Promise.all(
					fileEntries
						.filter((entry) => Boolean(entry))
						.flat(Infinity).map(
							(file) => file.arrayBuffer().then((buffer) => ({ file, buffer })),
						),
				);

				const files = uniqWith(wBuffers, isEqual).map((f) => f.file);

				this.validateAndEmit(files);
			} else {
				this.validateAndEmit(event.dataTransfer.files);
			}
		},

		validateFile(file) {
			const { accept } = this.$attrs;

			if (!accept) {
				return true;
			}

			const fileType = file.type;

			return accept
				.split(',')
				.map((acceptedType) => acceptedType.trim())
				.some((acceptedType) => {
					if (acceptedType[0] === '.') {
						return new RegExp(`${escapeRegExp(acceptedType)}$`, 'i').test(file.name);
					}

					// MIME
					const isMime = acceptedType.match(/^.+\/.+$/);
					if (isMime) {
						if (acceptedType === '*/*') {
							return true;
						}

						return new RegExp(escapeRegExp(acceptedType).replace(/\\\*/g, '.+')).test(fileType);
					}

					return acceptedType === fileType;
				});
		},

		validateAndEmit(files) {
			const [validFiles] = partition(files, this.validateFile);
			this.emitFiles(validFiles);
		},

		emitFiles(files) {
			this.$emit('image-picker:add-images', files);
		},
	},
};
</script>

<style module="$s">
.ImagePickerInputContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 96px;
	height: 96px;
	color: $maker-color-neutral-20;
	background-color: $maker-color-background;
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-default-border-radius;
	cursor: pointer;
	transition: background-color 150ms linear;
}

.ImagePickerInputContainer.isDragged {
	background-color: $maker-color-neutral-10;
}

.ImagePickerInput {
	display: none;
}
</style>
