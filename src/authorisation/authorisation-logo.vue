<script setup></script>

<template>
	<div class="logo-container">
		<picture class="logo">
			<source srcset="/logo.png" type="image/webp" />
			<img width="256" height="256" src="/logo.png" alt="photo" />
		</picture>
		<p class="url">Wood-Form.digital</p>
	</div>
</template>

<style scoped>
.logo-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

img {
	width: 128px;
	height: 128px;
}
</style>
