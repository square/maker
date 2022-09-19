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
		<arrow-icon
			v-if="dragged"
			inline
			:class="$s.ImagePickerDragIcon"
		/>
		<plus-icon
			v-else
			inline
			:class="$s.ImagePickerInputIcon"
		/>
	</div>
</template>

<script>
import PlusIcon from '@square/maker-icons/Plus';
import ArrowIcon from '@square/maker-icons/ArrowUp';
import {
	isEqual, uniqWith, escapeRegExp, partition,
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
	// eslint-disable-next-line unicorn/explicit-length-check
	if (!entries.length) {
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
	name: 'MImagePicker',
	components: {
		PlusIcon,
		ArrowIcon,
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
	background-color: $maker-color-background;
	border: 1px solid $maker-color-neutral-20;
	border-radius: $maker-shape-default-border-radius;
	cursor: pointer;
	transition: background-color 150ms linear;
	fill: $maker-color-neutral-20;
}

.ImagePickerInputContainer.isDragged {
	background-color: $maker-color-neutral-10;
}

.ImagePickerDragIcon {
	width: 24px;
	height: 24px;
}

.ImagePickerInputIcon {
	width: 16px;
	height: 16px;
}

.ImagePickerInput {
	display: none;
}
</style>
