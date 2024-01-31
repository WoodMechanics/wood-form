<script setup>
import WoodMechanics from '../components/common/WoodMechanics.vue'
import MainPageHeader from '../components/homepage/header/MainPageHeader.vue'
import Section from '../components/homepage/section/Section.vue'
import CreateForm from '../components/homepage/section/CreateForm.vue'
import RecentForm from '../components/homepage/section/RecentForm.vue'
</script>

<template>
	<WoodMechanics />
	<MainPageHeader />
	<main>
		<Section class="first"><CreateForm/></Section>
		<Section><RecentForm /></Section>
	</main>
</template>

<style scoped>
main {
	height: 100%;
	font-family: var(--font-bold);
	color: var(--color-text);
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.first{
	background-color: var(--color-unknown-image);
}
</style>
