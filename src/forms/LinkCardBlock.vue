<template>
	<RouterLink to="/new-form" class="card">
		<div class="image"></div>
		<slot />
	</RouterLink>
</template>

<style scoped>
.image {
	height: 180px;
	width: 200px;
	margin: 0 10px;
	background-color: var(--color-unknown-image);
	box-shadow: 0 2px 7px var(--color-secondary);
	border-radius: 5px;
}
.card {
	transition-duration: 0.2s;
	color: var(--color-links);

	&:hover {
		transition-duration: 0.2s;
		color: var(--color-text-hover);
	}
}
</style>
