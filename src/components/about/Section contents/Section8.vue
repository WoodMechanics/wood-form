<template>
	<div class="sectionHead">
		<h2>Get a head start with templates</h2>
		<p>
			Choose from a variety of surveys, questionnaires, and other professionally-designed templates
			to kick things off quickly.
		</p>
	</div>
	<div class="section8Images">
		<div>
			<p>Orders</p>
			<div class="section8Img" />
		</div>
		<div>
			<p>Registration</p>
			<div class="section8Img" />
		</div>
		<div>
			<p>Feedback</p>
			<div class="section8Img" />
		</div>
		<div>
			<p>Assessment</p>
			<div class="section8Img" />
		</div>
	</div>
</template>

<style scoped>
div {
	margin: 0 30px;
}
div p {
	text-align: center;
}
.section8Images {
	display: flex;
}
.sectionHead {
	text-align: center;
	width: 60%;
	margin: 0;
}
.section8Img {
	width: 270px;
	height: 400px;
	background-color: var(--color-unknown-image);
	border-radius: 7px;
	box-shadow: 0 2px 15px #181818;
}
</style>
