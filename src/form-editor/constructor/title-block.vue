<script setup>
import SectionBlock from './section-block.vue'
import WInput from '../../authorisation/input/w-input.vue'
</script>

<template>
	<section-block>
		<div class="title-container">
			<w-input class="name-input" placeholder="Form name" />
			<w-input class="description-input" placeholder="description" />
		</div>
	</section-block>
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
