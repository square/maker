<template>
	<div
		:class="$s.ImagePickerInputContainer"
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

const getEntryFile = (entry) => new Promise((resolve) => entry.file(resolve));
const readEntries = (reader) => new Promise((resolve) => reader.readEntries(resolve));
const getAllEntries = (reader, aggregated = []) => readEntries(reader).then((entries) => {
	// eslint-disable-next-line unicorn/explicit-length-check
	if (!entries.length) {
		return aggregated;
	}
	return getAllEntries(reader, aggregated.concat(entries));
});
function traverseEntry(entry) {
	if (entry) {
		if (entry.isFile) {
			return getEntryFile(entry);
		}
		if (entry.isDirectory) {
			return getAllEntries(entry.createReader()).then(
				(entries) => Promise.all(entries.map((innerEntry) => traverseEntry(innerEntry))),
			);
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

		handleDrop(event) {
			this.setDragged(false);

			if (event.dataTransfer.items) {
				Promise.all(
					[...event.dataTransfer.items]
					.map((item) => traverseEntry(item.webkitGetAsEntry && item.webkitGetAsEntry())),
				)
				.then((files) => Promise.all(
					files.flat(Infinity).map(
						(file) => file.arrayBuffer().then((buffer) => ({ file, buffer })),
					),
				))
				.then((wBuffers) => {
					const files = uniqWith(wBuffers, isEqual).map((f) => f.file);
					this.validateAndEmit(files);
				});
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
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	cursor: pointer;
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
