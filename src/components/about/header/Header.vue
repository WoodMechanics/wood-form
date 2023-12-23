<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<body>
		<nav>
			<div>
				<a href="#">Overview</a>
				<a href="#">Features</a>
			</div>
			<div>
				<RouterLink to="/sign-in">Sign In</RouterLink>
				<RouterLink to="/" class="mainLink">Go to Forms</RouterLink>
			</div>
		</nav>
	</body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
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
	font-family: 'Red Hat Display', sans-serif;
}
a {
	text-decoration: none;
	color: #121212;
	margin: 10px 40px;
	font-size: 20px;
}
a:hover{
	transition-duration: .4s;
	color: #28297a;
	text-shadow: 0 0 1px #28297a;
}
.mainLink{
	background-color: #d0d0d0;
	border: 1px solid #b3b3b3;
	padding: 10px 20px;
	border-radius: 5px;
}
.mainLink:hover{
	border: 1px solid #28297a;
}

</style>
