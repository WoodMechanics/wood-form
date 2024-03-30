<script setup>
const { link } = defineProps({
	link: {
		type: String,
		required: true
	}
})
</script>

<template>
	<RouterLink class="w-link" :to="link">
		<slot />
	</RouterLink>
</template>

<style scoped>
.w-link {
	padding: 12px 24px;
	border: 1px solid var(--primary);
	color: var(--color-text);
	text-decoration: none;

	&:hover {
		background: var(--primary);
		color: white;
	}
}
</style>
