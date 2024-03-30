<script setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
	<div class="block">
		<div class="block-header">
			<div class="active-state" :class="{ active: active }">
				<div class="block-content">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.block-header {
	border-top: 12px solid var(--primary);
	.active-state {
		border-left: 8px solid transparent;

		&.active {
			border-left: 8px solid #428fdc;
		}
	}
}

.block {
	overflow: hidden;
	width: 100%;
	background: white;
	border-radius: 8px;
	box-shadow:
		0 2px 1px -1px rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.block-content {
	padding: 0 24px;
}
</style>
