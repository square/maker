<template>
	<div
		@touchstart="handleTouchEvent"
		@touchmove="handleTouchEvent"
		@touchend="handleTouchEvent"
	>
		<slot />
	</div>
</template>

<script>
const touchPointsDrag = 1;
const touchPointsSwipe = 1;
const initialValues = {
	touchStarted: false,
	touchEnded: false,
	touchPoints: [],
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
		preventDefault: {
			type: Boolean,
			default: false,
		},
		minSwipeDistance: {
			type: Number,
			default: 30,
		},
		maxSwipeDuration: {
			type: Number,
			default: 300,
		},
	},

	data() {
		return {
			...initialValues,
		};
	},

	computed: {
		timeElapsed() {
			return this.timeCurrent - this.timeStart;
		},

		changeY() {
			return this.clientYCurrent - this.clientYStart;
		},

		changeX() {
			return this.clientXCurrent - this.clientXStart;
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

		isSwipeGesture() {
			const invalidTouchPoints = this.touchPoints.filter((value) => value !== touchPointsSwipe);
			return invalidTouchPoints.length === 0
				&& this.timeElapsed < this.maxSwipeDuration
				&& (Math.abs(this.changeY) > this.minSwipeDistance
				|| Math.abs(this.changeX) > this.minSwipeDistance);
		},

		isDragGesture() {
			const invalidTouchPoints = this.touchPoints.filter((value) => value !== touchPointsDrag);
			return invalidTouchPoints.length === 0;
		},
	},

	watch: {
		timeCurrent() {
			if (this.isDragGesture) {
				this.$emit(`on-drag-${this.direction}`, this.gesture);
			}
		},

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
	},

	methods: {
		handleTouchEvent(event) {
			if (this.preventDefault) {
				event.preventDefault();
			}
			switch (event.type) {
			case 'touchstart':
				this.touchStarted = true;
				this.clientXStart = event.changedTouches[0].clientX;
				this.clientYStart = event.changedTouches[0].clientY;
				this.timeStart = event.timeStamp;
				break;
			case 'touchmove':
				this.touchPoints.push(event.changedTouches.length);
				this.clientXCurrent = event.changedTouches[0].clientX;
				this.clientYCurrent = event.changedTouches[0].clientY;
				this.timeCurrent = event.timeStamp;
				break;
			case 'touchend':
				this.touchEnded = true;
				this.clientXCurrent = event.changedTouches[0].clientX;
				this.clientYCurrent = event.changedTouches[0].clientY;
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
