<script setup>
const model = defineModel()
defineProps({
	value: String,
	label: String,
	status: Boolean
})
</script>

<template>
	<label>
		{{ label }}
		<input v-model="model" v-bind="$attrs" :class="{ invalid: !status }" />
		<span class="after-input">
			<slot name="after" />
		</span>
	</label>
</template>

<style scoped>
label {
	display: flex;
	flex-direction: column;

	input {
		margin-top: 4px;
		padding: 8px;
		flex-grow: 0;
	}
}

.after-input {
	margin-top: 2px;
	font-weight: 300;
	font-size: 14px;
	font-family: WixMadeforDisplay, serif;
}

.invalid {
	outline: 1px solid red;
}
</style>
