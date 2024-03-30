<script setup>
const { title, date } = defineProps({
	title: String,
	date: String
})
</script>

<template>
	<article class="card">
		<div class="img-placeholder"></div>
		<h3>{{ title }}</h3>
		<time>{{ date }}</time>
	</article>
</template>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-text);
	width: 210px;
	height: 240px;

	.img-placeholder {
		width: 100%;
		height: 80%;
		background: var(--color-background);
	}

	&:hover {
		border-color: var(--primary);
	}
}

h3 {
	font-size: 16px;
}
</style>
