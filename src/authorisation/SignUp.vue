<script setup>
import { http } from '../api/http.js'
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')

async function register() {
	try {
		const response = await http('auth/signup', {
			method: 'POST',
			body: { email: email.value, password: password.value }
		})
		console.log(response)
	} catch (e) {
		console.log('Error: ', e)
	}
	console.log(username.value, email.value, password.value)
}
</script>

<template>
	<div class="sign-up">
		<div class="logo-container">
			<picture class="logo">
				<source srcset="/wood-logo.webp" type="image/webp" />
				<img width="256" height="256" src="/wood-logo.png" alt="photo" />
			</picture>
			<p class="domen">Wood-Form.digital</p>
		</div>
		<form @submit.prevent="register">
			<label>
				Username
				<input v-model="username" type="text" />
			</label>
			<label>
				Email
				<input v-model="email" type="text" />
				<span class="after-input">We recommend a work email address.</span>
			</label>
			<label>
				Password
				<input v-model="password" />
				<span class="after-input">Minimum length is 8 characters.</span>
			</label>
			<button type="submit">Register</button>
		</form>

		<span class="sign-in-link">
			<span>Already have an account?</span>
			<RouterLink to="/sign-in">Sign In</RouterLink>
		</span>
	</div>
</template>

<style scoped>
.sign-up {
	width: 450px;
	display: flex;
	flex-direction: column;
	margin: 40px auto 0;

	@media (width < 1024px) {
		width: 370px;
	}
}

.logo-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

img {
	width: 128px;
	height: 128px;
}

form {
	padding: 40px 40px 0;
	display: flex;
	gap: 16px;
	flex-direction: column;

	label {
		display: flex;
		flex-direction: column;

		input {
			margin-top: 4px;
			padding: 8px;
			flex-grow: 0;
		}
	}

	button {
		padding: 8px 16px;
	}

	.after-input {
		margin-top: 2px;
		font-weight: 300;
		font-size: 14px;
		font-family: WixMadeforDisplay, serif;
	}
}
.sign-in-link {
	margin-top: 16px;
	text-align: center;

	span {
		display: inline;
		margin: 0;
	}

	a {
		color: var(--color-text-hover);
		font-size: 16px;
		margin: 0 0 0 4px;
	}
}
</style>
