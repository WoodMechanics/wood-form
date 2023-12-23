<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
	import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<a href="">Overview</a>
		<a href="">Faatures</a>
		<RouterLink to="/sign-in">Sign In</RouterLink>
		<a href=""></a>
	</nav>
</template>

<style>
	nav{
    background-color: #a1a1a1;
}
</style>