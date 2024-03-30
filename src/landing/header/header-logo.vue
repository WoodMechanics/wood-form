<template>
	<span class="logo">
		<img width="36" height="36" src="/icons/logo.png" alt="Wood Forms Logo" />
		<router-link to="/">Wood Forms</router-link>
	</span>
</template>

<style scoped>
.logo {
	display: flex;
	align-items: center;
	gap: 8px;

	a {
		font-size: 24px;
		color: var(--color-text);
		text-decoration: none;
	}
}
</style>
