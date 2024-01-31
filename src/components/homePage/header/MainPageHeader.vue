<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
	<nav>
		<div class="contents">
			<h1>Wood-Forms</h1>
			<RouterLink to="/about">Overview</RouterLink>
			<div class="inputarea">
				<button type="submit"><img src="../../../assets/icons/icons8-search.svg" alt="" /></button>
				<input type="text" placeholder="Search" />
			</div>
		</div>
	</nav>
</template>

<style scoped>
nav {
	position: sticky;
	width: 100%;
	background-color: var(--color-header);
	border-bottom: 1px solid var(--color-hover);
	display: flex;
	align-items: center;
	font-family: var(--font-main);

	a {
		text-decoration: none;
		color: var(--color-text);
		transition-duration: 0.4s;
		font-size: var(--size-third-title);
	}
	a:hover {
		color: var(--color-text-hover);
		transition-duration: 0.4s;
	}
	.contents {
		padding: 0 30px;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.inputarea {
			width: 75%;
			display: flex;
			input {
				background-color: var(--color-background);
				border: 1px solid var(--color-faint);
				border-radius: 5px;
				padding: 5px 50px;
				height: 100%;
				width: 100%;
				font-family: var(--font-main);
				font-size: var(--size-text);
				color: var(--color-text);
				box-shadow: 0 0 5px var(--color-hover);
			}
			& button {
				background-color: inherit;
				border: none;
				position: relative;
				left: 3em;
				z-index: 1;

				& img {
					width: 25px;
					margin: 0;
					transition-duration: 0.2s;
				}
				& img:active {
					transform: scale(90%);
					transition-duration: 0.2s;
				}
			}
		}
	}
}
</style>
