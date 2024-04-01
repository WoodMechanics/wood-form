<script setup>
import { RouterView } from 'vue-router'
import { useDevInTitle } from './lib/dev-title.js'

useDevInTitle()
</script>

<template>
	<main>
		<RouterView />
	</main>
</template>
