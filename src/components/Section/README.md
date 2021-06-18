# Section

```vue
<template>
	<div>
		<h3>Text Section POC</h3>
		<m-section>
			<div class="section-content">
				<m-heading :size="2">
					Basic default text section
				</m-heading>
				<m-text>Simple, affordable, memorable</m-text>
			</div>
			<div class="section-group">
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
			</div>
		</m-section>
		<m-section text-align="center">
			<div class="section-content">
				<m-heading :size="2">
					Alignment
				</m-heading>
				<m-text>Simple, affordable, memorable</m-text>
			</div>
			<div class="section-group">
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
			</div>
		</m-section>
		<m-section
			bg-color="#5EA581"
			color="white"
		>
			<div class="section-content">
				<m-heading :size="2">
					Handling color
				</m-heading>
				<m-text>Simple, affordable, memorable</m-text>
			</div>
			<div class="section-group">
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
				<div>
					<m-heading :size="1">
						Distinctive and Bold
					</m-heading>
					<m-text>
						One of our most popular items. Perfect for everyday use.
						Exceptional quality and choice.
					</m-text>
					<a>Learn More</a>
				</div>
			</div>
		</m-section>
		<m-section content-width="large">
			<div class="layout layout-1">
				<div class="section-content">
					<m-heading :size="2">
						Layout Alternative
					</m-heading>
					<m-text>Simple, affordable, memorable</m-text>
				</div>
				<div class="section-group">
					<div>
						<m-heading :size="1">
							Distinctive and Bold
						</m-heading>
						<m-text>
							One of our most popular items. Perfect for everyday use.
							Exceptional quality and choice.
						</m-text>
						<a>Learn More</a>
					</div>
					<div>
						<m-heading :size="1">
							Distinctive and Bold
						</m-heading>
						<m-text>
							One of our most popular items. Perfect for everyday use.
							Exceptional quality and choice.
						</m-text>
						<a>Learn More</a>
					</div>
				</div>
			</div>
		</m-section>

		<m-section content-width="large">
			<div class="layout layout-2">
				<div class="section-content">
					<m-heading :size="2">
						Layout with grid
					</m-heading>
					<m-text>Simple, affordable, memorable</m-text>
				</div>
				<div class="section-group">
					<div>
						<m-heading :size="1">
							Distinctive and Bold
						</m-heading>
						<m-text>
							One of our most popular items. Perfect for everyday use.
							Exceptional quality and choice.
						</m-text>
						<a>Learn More</a>
					</div>
					<div>
						<m-heading :size="1">
							Distinctive and Bold
						</m-heading>
						<m-text>
							One of our most popular items. Perfect for everyday use.
							Exceptional quality and choice.
						</m-text>
						<a>Learn More</a>
					</div>
					<div>
						<m-heading :size="1">
							Distinctive and Bold
						</m-heading>
						<m-text>
							One of our most popular items. Perfect for everyday use.
							Exceptional quality and choice.
						</m-text>
						<a>Learn More</a>
					</div>
				</div>
			</div>
		</m-section>

		<h3>Basic section tests</h3>
		<m-section height="auto">
			<div class="headerWrap">
				<m-heading :size="2">
					Number8
				</m-heading>
				<m-button>Order Now</m-button>
			</div>
		</m-section>
		<m-section
			background-image="https://source.unsplash.com/oNm9NkTFLfA/1000x480"
			color="white"
		>
			<m-heading :size="-1">
				Default Section
			</m-heading>
			<m-heading :size="4">
				Get Caffeinated
			</m-heading>
			<m-text>Lorem ipsum dolor sit amet</m-text>
			<m-button color="white">
				Order Now
			</m-button>
		</m-section>
		<m-section
			content-width="small"
			height="small"
			style="text-align: center;"
		>
			<m-heading
				:size="3"
				style="word-break: break-word"
			>
				Made with natural ingredients, nothing fake
			</m-heading>
			<m-button variant="tertiary">
				Shop all Flavors
			</m-button>
		</m-section>
		<m-section bg-color="#f2f2f2">
			<m-image
				src="https://source.unsplash.com/200x200/weekly?coffee"
				style="width: 200px"
			/>
			<m-heading :size="-1">
				Our Story
			</m-heading>
			<m-heading :size="2">
				From our family to yours
			</m-heading>
			<m-text>
				We built a thriving business from scratch and we're proud to offer
				the highest quality, most unique merchandise on the market today.
				From our family to yours, we put lots of love and careful attention
				in each item. We hope you enjoy our work as much as we enjoy bringing it to you!
			</m-text>
			<m-button variant="secondary">
				Learn More
			</m-button>
		</m-section>
		<m-section
			bg-color="black"
			color="white"
			height="auto"
		>
			<div class="footerWrap">
				<m-heading :size="2">
					Number8
				</m-heading>
				<m-text>Copyright 2021</m-text>
			</div>
		</m-section>
	</div>
</template>

<script>
import { MSection } from '@square/maker/components/Section';
import { MHeading } from '@square/maker/components/Heading';
import { MText } from '@square/maker/components/Text';
import { MButton } from '@square/maker/components/Button';
import { MImage } from '@square/maker/components/Image';

export default {
	components: {
		MSection,
		MHeading,
		MText,
		MButton,
		MImage,
	},
};
</script>

<style>

.section-content {
	margin-bottom: 32px;
}

.section-group {
	display: flex;
	flex-direction: column;
	gap: 32px;

	--grid-col: 3;
}

.layout-1 {
	display: grid;
}

.layout-1 .section-group,
.layout-2 .section-group {
	display: grid;
	grid-template-columns: repeat(var(--grid-col), minmax(240px, 1fr) );
}

.headerWrap,
.footerWrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).

## Events

Supports events from [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).
<!-- api-tables:end -->
