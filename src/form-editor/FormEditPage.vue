<script setup>
import Title from './Title.vue'
import Controls from './Controls.vue'
import Tabs from './Tabs.vue'
import Constructor from './constructor/Constructor.vue'
import Answers from './answers/Answers.vue'
import Settings from './settings/Settings.vue'

const tabsList = [
	{
		name: 'Constructor',
		component: Constructor,
		disabled: true
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
