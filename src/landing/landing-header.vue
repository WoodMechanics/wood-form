<script setup>
import HeaderLogo from '../header/header-logo.vue'
import HeaderNavigation from './header/header-navigation.vue'
import HeaderSignIn from './header/sign-in.vue'
import GoToForms from './header/go-to-forms.vue'
</script>

<template>
	<header>
		<div class="logo-and-links">
			<header-logo />
			<header-navigation />
		</div>
		<div class="pages-links">
			<header-sign-in />
			<go-to-forms />
		</div>
	</header>
</template>

<style scoped>
header {
	top: 0;
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 24px;
	background: var(--color-background);
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
}

.logo-and-links {
	display: flex;
	align-items: center;
	gap: 32px;
}

.pages-links {
	display: flex;
	gap: 12px;
}
</style>
