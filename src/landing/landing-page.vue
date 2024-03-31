<script setup>
import LandingHeader from './landing-header.vue'
import LandingSection from './landing-section.vue'
import WLink from '../lib/w-link.vue'
</script>

<template>
	<landing-header />

	<landing-section id="overview">
		<div>
			<h2>Get insights quickly, with Wood-Forms</h2>
			<p>Easily create and share online forms and surveys, and analyze responses in real-time.</p>
		</div>
		<div class="image" />
	</landing-section>

	<p class="what-can-do">See what you can do with Wood-Forms</p>

	<landing-section id="features">
		<div class="image" />

		<div>
			<h2>Create an online form as easily as creating a document</h2>
			<p>
				Select from multiple question types, drag-and-drop to reorder questions, and customize
				values as easily as pasting a list.
			</p>
		</div>
	</landing-section>
	<landing-section>
		<div>
			<h2>Send polished surveys and forms</h2>
			<p>
				Customize colors, images, and fonts to adjust the look and feel or reflect your
				organization's branding. And add custom logic that shows questions based on answers, for a
				more seamless experience.
			</p>
		</div>
		<div class="image" />
	</landing-section>

	<landing-section>
		<div class="image" />
		<div>
			<h2>Analyze responses with automatic summaries</h2>
			<p>
				See charts with response data update in real-time. Or open the raw data with Google Sheets
				for deeper analysis or automation.
			</p>
		</div>
	</landing-section>

	<landing-section id="security">
		<div>
			<h2>Create and respond to surveys from anywhere</h2>
			<p>
				Access, create, and edit forms on-the-go, from screens big and small. Others can respond to
				your survey from wherever they are—from any mobile device, tablet, or computer.
			</p>
		</div>
		<div class="image" />
	</landing-section>

	<div class="start">
		<h2>Ready to get started?</h2>
		<div class="start-link">
			<w-link link="/">Go To Forms</w-link>
		</div>
	</div>
</template>

<style>
#overview {
}
.what-can-do {
	text-align: center;
}

.image {
	border: 1px solid var(--color-text);
	background: white;
	width: 700px;
	height: 450px;
}

.start {
	height: 200px;
	display: grid;
	place-content: center;

	.start-link {
		display: flex;
		justify-content: center;
	}
}
</style>
