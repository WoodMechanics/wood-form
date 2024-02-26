<script setup>
import BaseInput from '../../lib/BaseInput.vue'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
	<SectionBlock>
		<div class="title-container">
			<BaseInput class="name-input" placeholder="Form name" />
			<BaseInput class="description-input" placeholder="description" />
		</div>
	</SectionBlock>
</template>

<style scoped>
.name-input {
	font-size: 32px;
}

.description-input {
	font-size: 14px;
}

.title-container {
	padding: 24px 0 24px;
	gap: 16px;
	display: flex;
	flex-direction: column;
}
</style>
