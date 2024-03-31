<template>
	<input v-bind="$props" type="text" />
</template>

<style scoped>
input {
	margin: 0;
	border: 1px solid #89888d;
	border-radius: 4px;
	padding: 6px 10px;
	transition:
		border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
	&:focus {
		box-shadow:
			0 0 0 1px #fff,
			0 0 0 3px #428fdc;
		outline: none;
	}
}
</style>
