<script setup>
import Gallery from './Gallery.vue'
import CardBlock from './CardBlock.vue'
import ControlButton from './ControlButton.vue'
</script>
<template>
	<main>
		<div class="heading">
			<h4>Create a Form</h4>
			<div class="leftPart">
				<ControlButton>
					<h4>Template Gallery</h4>
					<img src="../../../assets/icons/scroll-templates.svg" alt="" />
				</ControlButton>
				<hr />
				<ControlButton><img src="../../../assets/icons/menu-dots.svg" alt="" /></ControlButton>
			</div>
		</div>
		<Gallery>
			<CardBlock>
				<p>Empty Form</p>
			</CardBlock>
			<CardBlock>
				<p>Contact information</p>
			</CardBlock>
			<CardBlock>
				<p>Invitation response</p>
			</CardBlock>
			<CardBlock>
				<p>Party invitation</p>
			</CardBlock>
			<CardBlock>
				<p>Shopping ordering</p>
			</CardBlock>
			<CardBlock>
				<p>Event registration</p>
			</CardBlock>
		</Gallery>
	</main>
</template>

<style scoped>
hr {
	border: 1px solid var(--color-background-hover);
	height: 20px;
}
main {
	padding: 10px 0;
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
}
h4 {
	font-size: var(--size-third-title);
	margin: 0;
}
.heading {
	margin: 20px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.leftPart {
	display: flex;
	align-items: center;
	img {
		width: 20px;
		transition-duration: 0.2s;
	}
	& img:focus,
	img:active {
		transition-duration: 0.2s;
		transform: scale(80%);
	}
}
.leftPart * {
	margin: 0 10px;
}
</style>
