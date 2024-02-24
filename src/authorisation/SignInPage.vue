<script setup></script>

<template>
	<main class="auth">
		<div>
			<h2>Authorisation</h2>
			<form class="auth-form">
				<label class="auth-form-input">
					Login
					<input type="text" />
				</label>
				<label class="auth-form-input">
					password
					<input type="text" />
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
	</main>
</template>

<style scoped>
body {
	font-family: 'Red Hat Display', sans-serif;
	color: #181818;
}
.auth {
	height: 100vh;
	display: grid;
	place-content: center;
}
.auth-form {
	display: flex;
	gap: 16px;
	flex-direction: column;
}

.auth-form-input {
	text-align: start;
	gap: 8px;
	display: flex;
	flex-direction: column;
}
</style>
