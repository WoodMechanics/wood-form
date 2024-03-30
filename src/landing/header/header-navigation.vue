<template>
	<nav>
		<a href="#overview">Overview</a>
		<a href="#features">Features</a>
		<a href="#security">Security</a>
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	align-items: center;
	gap: 24px;

	a {
		font-size: 18px;
		color: var(--color-hover);
		text-decoration: none;

		&:hover {
			color: var(--color-text);
		}
	}
}
</style>
