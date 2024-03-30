<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
main {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
</style>
