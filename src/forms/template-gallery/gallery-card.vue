<script setup>
const { title } = defineProps({
	title: String
})
</script>

<template>
	<article>
		<div class="img-placeholder"></div>
		<h3>{{ title }}</h3>
	</article>
</template>

<style scoped>
article {
	.img-placeholder {
		width: 170px;
		height: 130px;
		background: white;
		border: 1px solid transparent;

		&:hover {
			border-color: var(--primary);
		}
	}

	h3 {
		display: block;
		max-width: 170px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		font-size: 14px;
	}
}
</style>
