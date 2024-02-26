<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const { tabs } = defineProps({
	tabs: {
		type: Array,
		required: true
	}
})
</script>

<template>
	<TabGroup>
		<div class="tabs-container">
			<TabList>
				<Tab v-slot="{ selected }" v-for="tab in tabs" as="template" :key="tab.name">
					<button :disabled="tab.disabled" :class="{ active: selected }" class="tab-button">
						{{ tab.name }}
					</button>
				</Tab>
			</TabList>
		</div>

		<TabPanels class="tab-panels">
			<TabPanel v-for="tab in tabs" :key="tab.name">
				<component :is="tab.component" />
			</TabPanel>
		</TabPanels>
	</TabGroup>
</template>

<style scoped>
.tabs-container {
	font-family: var(--font-main);
	font-size: 14px;
	background: whitesmoke;
	display: grid;
	place-content: center;
}
.tab-button {
	font-size: inherit;
	font-family: inherit;
	cursor: pointer;
	background: transparent;
	border: none;
	padding: 8px;
	transition: background-color 0.2s;
	border-bottom: 2px solid transparent;
	outline: none;

	&:focus-visible {
		background: var(--color-background);
	}

	&.active {
		border-bottom: 2px solid var(--primary);
	}
}

.tab-panels {
	width: 770px;
	margin: auto;
	padding-bottom: 64px;
}
</style>
