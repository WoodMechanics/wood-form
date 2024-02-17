<script setup>
import { RouterLink } from 'vue-router'
import LinkButton from '../../common/LinkButton.vue'
</script>

<template>
		<nav>
			<div>
				<a href="#overview">Overview</a>
				<a href="#features">Features</a>
			</div>
			<div class="rightSide">
				<RouterLink to="/sign-in">Sign In</RouterLink>
				<LinkButton />
			</div>
		</nav>
</template>

<style>
nav {
	width: 100%;
	background-color: var(--color-header);
	border-bottom: 1px solid var(--color-hover);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	padding: 15px 0;
	font-family: var(--font-main);
}

a {
	text-decoration: none;
	color: var(--color-text);
	margin: 10px 40px;
	font-size: 20px;
	transition-duration: .5s;

	:hover {
		transition-duration: 0.5s;
		color: var(--color-text-hover);
	}
}
.rightSide {
	display: flex;
	margin-right: 2%;
}
</style>
