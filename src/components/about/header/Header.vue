<script setup>
import { RouterLink } from 'vue-router'
import LinkButton from '../../common/LinkButton.vue'
</script>

<template>
	<body>
		<nav>
			<div>
				<a href="#">Overview</a>
				<a href="#">Features</a>
			</div>
			<div class="rightSide">
				<RouterLink to="/sign-in">Sign In</RouterLink>
				<LinkButton></LinkButton>
			</div>
		</nav>
	</body>
</template>

<style>
nav {
	width: 100%;
	background-color: #efeeee;
	box-shadow: 0 2px 5px #9d9d9d;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	padding: 20px;
	font-family: var(--font-main);
}

a {
	text-decoration: none;
	color: #121212;
	margin: 10px 40px;
	font-size: 20px;

	&:hover {
		transition-duration: 0.4s;
		color: #28297a;
		text-shadow: 0 0 1px #28297a;
	}
}
.rightSide {
	display: flex;
	margin-right: 1%;
}
</style>
