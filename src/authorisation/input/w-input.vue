<script setup>
import { ref } from 'vue'

const { value, label, email } = defineProps({
	value: String,
	label: String,
	email: Boolean
})

const type = ref(email ? 'email' : 'text')
</script>

<template>
	<label>
		{{ label }}
		<input @input="$emit('input', $event)" :value="value" :type="type" />
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
</style>
