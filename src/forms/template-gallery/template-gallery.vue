<script setup>
import GalleryCard from './gallery-card.vue'
import { ref } from 'vue'

const cardsList = ref([
	{
		name: 'Contact information sadasd asda'
	},
	{
		name: 'Answer for invite'
	},
	{
		name: 'Invite to Party'
	},
	{
		name: 'Order shirts'
	},
	{
		name: 'Registration to event'
	},
	{
		name: 'Registration to event'
	}
])
</script>

<template>
	<div class="container">
		<h2>Create form</h2>
		<div class="gallery">
			<gallery-card v-for="card in cardsList" :title="card.name" :key="card.name" />
		</div>
	</div>
</template>

<style scoped>
.container {
	margin-top: 24px;
	display: grid;
	justify-content: center;
}
h2 {
	font-size: 20px;
	margin: 0;
}
.gallery {
	margin-top: 24px;
	display: flex;
	gap: 24px;
}
</style>
