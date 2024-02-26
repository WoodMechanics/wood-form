<template>
	<div class="header-controls">
		<a href="/viewform">
			<img width="32" height="32" src="/icons/eye.svg" alt="eye" />
		</a>
		<button>Send</button>
	</div>
</template>

<style scoped>
.header-controls {
	display: flex;
	gap: 16px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		height: auto;
		padding: 0;
		margin: 0;
	}
	button {
		cursor: pointer;
		font-size: 16px;
		font-family: var(--font-main);
		border: none;
		background: var(--primary);
		color: white;
		padding: 8px 16px;

		&:hover {
			background: var(--color-hover);
		}
	}
}
</style>
