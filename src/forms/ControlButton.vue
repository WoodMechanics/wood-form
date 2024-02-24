<template>
	<button>
		<slot />
	</button>
</template>

<style scoped>
button {
	display: flex;
	align-items: center;
	border: none;
	background-color: inherit;
	font-family: var(--font-bold);
}
</style>
