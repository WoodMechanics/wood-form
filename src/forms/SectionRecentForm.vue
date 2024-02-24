<script setup>
import Gallery from './Gallery.vue'
import CardBlock from './CardBlock.vue'
import ControlButton from './ControlButton.vue'
</script>

<template>
	<main>
		<div class="heading">
			<h4>Recent Forms</h4>
			<div class="ownerSelect">
				<label for="forms"><h4>Owner :</h4></label>
				<select id="forms">
					<option value="user">Personal</option>
					<option value="public">Public</option>
					<option value="all" selected>All</option>
				</select>
				<hr />
				<ControlButton>
					<img src="../../public/icons/list-com.svg" title="List view" alt="List view" />
				</ControlButton>
				<ControlButton>
					<img src="../../public/icons/sort.svg" title="Add file" alt="Add file" />
				</ControlButton>
				<ControlButton>
					<img src="../../public/icons/folder-com.svg" title="Add file" alt="Add file" />
				</ControlButton>
			</div>
		</div>
		<Gallery>
			<CardBlock>
				<div class="cardText">
					<p>MyForm1</p>
					<div>
						<img src="../../public/icons/list.svg" alt="Form" />
						<p><i>here goes date</i></p>
					</div>
				</div>
			</CardBlock>
		</Gallery>
	</main>
</template>

<style scoped>
main {
	padding: 10px 0;
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
}
h4 {
	font-size: var(--size-third-title);
}
.heading {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.ownerSelect {
	display: flex;
	align-items: center;
	justify-content: space-between;
	img:focus,
	img:active {
		transition-duration: 0.2s;
		transform: scale(80%);
	}
}
img {
	width: 20px;
	transition-duration: 0.2s;
}
select,
option {
	background-color: inherit;
	border: none;
	text-align: center;
	font-family: var(--font-main);
	font-size: var(--size-third-title);
}
.gallery {
	justify-content: flex-start;
}
.cardText {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	font-size: var(--size-very-small-text);
	p {
		margin: 10px 0 5px;
	}
	div {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 60%;
	}
}
i {
	color: var(--color-hover);
}
</style>
