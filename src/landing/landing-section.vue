<template>
	<div class="landing-section">
		<slot />
	</div>
</template>

<style scoped>
.landing-section {
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	place-content: center;
	height: 80vh;
	gap: 80px;
	padding: 16px 120px;
}
</style>
