<template>
	<div class="block">
		<div class="image"></div>
		<slot></slot>
	</div>
</template>
<style scoped>
.image {
	margin: 0 10px;
	height: 180px;
	width: 200px;
	background-color: var(--color-unknown-image);
	box-shadow: 0 2px 7px var(--color-secondary);
	border-radius: 5px;
}
.block {
	transition-duration: 0.2s;
	color: var(--color-links);
}
.block:hover {
	transition-duration: 0.2s;
	color: var(--color-text-hover);
}
</style>
