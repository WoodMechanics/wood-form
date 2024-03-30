<script setup>
import Section from './section.vue'
import Section1 from './section-contents/Section1.vue'
import Section2 from './section-contents/Section2.vue'
import Section3 from './section-contents/Section3.vue'
import Section4 from './section-contents/Section4.vue'
import Section5 from './section-contents/Section5.vue'
import Section6 from './section-contents/Section6.vue'
import Section7 from './section-contents/Section7.vue'
import Section8 from './section-contents/Section8.vue'
import Section9 from './section-contents/Section9.vue'
import LandingHeader from './landing-header.vue'
</script>

<template>
	<landing-header />
	<Header />
	<main>
		<Section id="overview">
			<Section1 />
		</Section>
		<Section class="section2">
			<Section2 />
		</Section>
		<Section id="features">
			<Section3 />
		</Section>
		<Section>
			<Section4 />
		</Section>
		<Section>
			<Section5 />
		</Section>
		<Section>
			<Section6 />
		</Section>
		<Section class="section7">
			<Section7 />
		</Section>
		<Section class="section8">
			<Section8 />
		</Section>
		<Section class="section9">
			<Section9 />
		</Section>
	</main>
</template>

<style>
main {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.section2 {
	height: 100px;
	margin: 30px 0;
}
.section7 {
	height: 300px;
	padding: 100px 0;
	align-items: flex-start;
	text-align: justify;
}
.section8,
.section9 {
	flex-direction: column;
	align-items: center;
	flex: none;
}
.section9 {
	margin-top: 70px;
	padding-bottom: 80px;
	height: fit-content;
}
</style>
