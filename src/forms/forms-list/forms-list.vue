<script setup>
import FormCard from './form-card.vue'
import { ref } from 'vue'

const list = ref([
	{
		id: 1,
		title: 'New form',
		date: '14-03-2024'
	},
	{
		id: 2,
		title: 'New form',
		date: '14-03-2024'
	},
	{
		id: 3,
		title: 'New form',
		date: '14-03-2024'
	},
	{
		id: 4,
		title: 'New form',
		date: '14-03-2024'
	}
])
</script>

<template>
	<div class="list-container">
		<div class="list">
			<form-card v-for="form in list" :key="form.id" v-bind="form" />
		</div>
	</div>
</template>

<style scoped>
.list-container {
	margin-top: 20px;
	padding: 20px 0;
	display: grid;
	justify-content: center;
	background: white;
	width: 100%;
}

.list {
	display: flex;
	gap: 24px;
}
</style>
