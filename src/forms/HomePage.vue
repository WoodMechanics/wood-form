<script setup>
import WoodMechanics from '../lib/components/WoodMechanics.vue'
import MainHeader from './MainHeader.vue'
import HomePageSection from './HomePageSection.vue'
import CreateForm from './SectionCreateForm.vue'
import RecentForm from './SectionRecentForm.vue'
</script>

<template>
	<WoodMechanics />
	<MainHeader />
	<main>
		<Section class="first"><CreateForm /></Section>
		<HomePageSection><RecentForm /></HomePageSection>
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
.first {
	background-color: var(--color-unknown-image);
}
</style>
