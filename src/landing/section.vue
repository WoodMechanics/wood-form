<template>
	<div class="container">
		<slot />
	</div>
</template>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	height: 700px;
	margin: 0 0 10px 0;
	div {
		flex: 2;
	}
	p {
		font-size: var(--size-text);
		line-height: var(--text-line-height);
	}
	h1 {
		font-size: var(--size-title);
	}
	h2 {
		font-size: var(--size-second-title);
	}
	h4 {
		font-size: var(--size-third-title);
	}
}
</style>
