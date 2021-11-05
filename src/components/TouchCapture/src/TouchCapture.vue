<template>
	<div
		@touchstart="touchEvent"
		@touchmove="touchEvent"
		@touchend="touchEvent"
	>
		<slot />
	</div>
</template>

<script>
import { throttle } from 'lodash';

const eventThrottle = 50;
const touchPointsDrag = 1;
const touchPointsSwipe = 1;
const initialValues = {
	touchStarted: false,
	touchEnded: false,
	touchPoints: 0,
	timeStart: 0,
	clientXStart: 0,
	clientYStart: 0,
	clientXCurrent: 0,
	clientYCurrent: 0,
	timeCurrent: 0,
};

export default {
	name: 'TouchCapture',

	props: {
		minDragDistance: {
			type: Number,
			default: 10,
		},
		minDragDuration: {
			type: Number,
			default: 100,
		},
		minSwipeDistance: {
			type: Number,
			default: 30,
		},
		maxSwipeDuration: {
			type: Number,
			default: 400,
		},
	},

	data() {
		return {
			...initialValues,
			touchEvent: throttle(this.handleTouchEvent, eventThrottle),
		};
	},

	computed: {
		timeElapsed() {
			return this.timeCurrent - this.timeStart;
		},

		changeY() {
			return Math.round(this.clientYCurrent - this.clientYStart);
		},

		changeX() {
			return Math.round(this.clientXCurrent - this.clientXStart);
		},

		direction() {
			const { changeY, changeX } = this;
			if (Math.abs(changeY) > Math.abs(changeX)) {
				return changeY < 0 ? 'up' : 'down';
			}
			return changeX < 0 ? 'left' : 'right';
		},

		gesture() {
			const { changeY, changeX } = this;
			return {
				changeX,
				changeY,
			};
		},

		isDragGesture() {
			if (this.touchPoints !== touchPointsDrag) {
				return false;
			}
			return this.timeElapsed > this.minDragDuration
				&& (Math.abs(this.changeY) > this.minDragDistance
				|| Math.abs(this.changeX) > this.minDragDistance);
		},

		isSwipeGesture() {
			if (this.touchPoints !== touchPointsSwipe) {
				return false;
			}
			return this.timeElapsed > this.minSwipeDuration
				&& (Math.abs(this.changeY) > this.minSwipeDistance
				|| Math.abs(this.changeX) > this.minSwipeDistance);
		},
	},

	watch: {
		touchEnded(completed) {
			if (completed) {
				if (this.isSwipeGesture) {
					this.$emit(`on-swipe-${this.direction}`, this.gesture);
				} else if (this.isDragGesture) {
					this.$emit('on-drag-end', this.gesture);
				}
				this.resetGesture();
			}
		},
		timeCurrent() {
			if (this.isDragGesture) {
				this.$emit(`on-drag-${this.direction}`, this.gesture);
			}
		},
	},

	methods: {
		handleTouchEvent(event) {
			switch (event.type) {
			case 'touchstart':
				this.touchStarted = true;
				this.clientYStart = event.changedTouches[0].clientY;
				this.clientXStart = event.changedTouches[0].clientX;
				this.timeStart = event.timeStamp;
				this.touchPoints = event.changedTouches.length;
				break;
			case 'touchmove':
				this.clientYCurrent = event.changedTouches[0].clientY;
				this.clientXCurrent = event.changedTouches[0].clientX;
				this.timeCurrent = event.timeStamp;
				this.touchPoints = event.changedTouches.length;
				break;
			case 'touchend':
				this.clientYCurrent = event.changedTouches[0].clientY;
				this.clientXCurrent = event.changedTouches[0].clientX;
				this.timeCurrent = event.timeStamp;
				this.touchEnded = true;
				break;
			default:
				break;
			}
		},

		resetGesture() {
			Object.entries(initialValues).forEach(([key, value]) => {
				this[key] = value;
			});
		},
	},
};
</script>
