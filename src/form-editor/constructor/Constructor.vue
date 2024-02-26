<script setup>
import SectionBlock from './SectionBlock.vue'
</script>

<template>
	<div class="constructor-wrapper">
		<SectionBlock>
			<label>
				<input placeholder="Form name" type="text" />
			</label>
			<label>
				<input placeholder="description" type="text" />
			</label>
		</SectionBlock>
	</div>
</template>

<style scoped>
.constructor-wrapper {
	margin-top: 12px;
}
</style>
