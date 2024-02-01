<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<template>
	<div class="logoName">
		<h1>WoodMechanics®</h1>
		<h2>
			Wood-Forms <span>{{ currentYear }}</span>
		</h2>
	</div>
</template>

<style scoped>
.logoName *{
	margin: 0;
}
.logoName {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: fit-content;
	position: fixed;
	bottom: 10px;
	right: 10px;
	color: var(--color-faint);
	font-family: var(--font-main);
	& h1 {
		font-size: var(--size-text);
	}
	& h2 {
		font-size: var(--size-small-text);
	}
}
</style>
