<script setup></script>

<template>
	<button class="mainLink">Go to Forms</button>
</template>

<style scoped>
.mainLink {
	font-family: var(--font-main);
	background-color: inherit;
	border: 1px solid var(--color-links);
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 18px;
	transition-duration: 0.5s;

	&:hover {
		border: 1px solid #7e7e7e;
		background-color: var(--color-background-hover);
		color: var(--color-background);
		transition-duration: 0.5s;
	}
}
</style>
