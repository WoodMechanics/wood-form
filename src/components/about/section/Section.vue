<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<style>
.container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 80%;
	height: 700px;
	margin: 0 0 10px 0;
	& div {
		flex: 2;
	}
	& p {
		font-size: var(--size-text);
		line-height: var(--text-line-height);
	}
	& h1 {
		font-size: var(--size-title);
	}
	& h2 {
		font-size: var(--size-second-title);
	}
	& h4 {
		font-size: var(--size-third-title);
	}
	& .image {
		margin: 0 50px;
		height: 75%;
		flex: 3;
		background-color: var(--color-unknown-image);
		border-radius: 7px;
		box-shadow: 0 2px 15px #181818;
	}
	& .phoneImg {
		flex: 1;
	}
  & .section7Img {
		width: 270px;
		height: 400px;
		background-color: var(--color-unknown-image);
		border-radius: 7px;
		box-shadow: 0 2px 15px #181818;
	}
}
</style>
