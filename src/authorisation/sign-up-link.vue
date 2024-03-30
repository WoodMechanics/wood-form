<template>
	<span class="sign-in-link">
		<span>Don't have account?</span>
		<RouterLink to="/sign-up">Sign Up</RouterLink>
	</span>
</template>

<style scoped>
.sign-in-link {
	margin-top: 16px;
	text-align: center;

	span {
		display: inline;
		margin: 0;
	}

	a {
		color: var(--color-text-hover);
		font-size: 16px;
		margin: 0 0 0 4px;
	}
}
</style>
<script setup></script>
