<script setup>
import Title from './constructor-title.vue'
import Controls from './form-controls.vue'
import Tabs from './constructor-tabs.vue'
import Constructor from './constructor/form-constructor.vue'
import Answers from './answers/form-answer.vue'
import Settings from './settings/form-settings.vue'

const tabsList = [
	{
		name: 'Constructor',
		component: Constructor,
		disabled: false
	},
	{
		name: 'Answers',
		component: Answers,
		disabled: true
	},
	{
		name: 'Settings',
		component: Settings,
		disabled: true
	}
]
</script>

<template>
	<header>
		<div class="upper-header">
			<Title />
			<Controls />
		</div>
	</header>
	<Tabs :tabs="tabsList" />
</template>

<style scoped>
header {
	font-family: var(--font-main);
	font-size: 14px;
	background: whitesmoke;
}

.upper-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 32px;
}
</style>
