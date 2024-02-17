<script setup>
import WoodMechanics from '../components/common/WoodMechanics.vue'
import MainHeader from '../components/homePage/header/MainHeader.vue'
import HomePageSection from '../components/homePage/section/HomePageSection.vue'
import CreateForm from '../components/homePage/section/SectionCreateForm.vue'
import RecentForm from '../components/homePage/section/SectionRecentForm.vue'
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
