<script setup>
import { http } from '../api/http.js'
import { ref } from 'vue'
import WInput from './input/w-input.vue'
import SignUpLink from './sign-up-link.vue'
import AuthorisationLogo from './authorisation-logo.vue'

const email = ref('')
const password = ref('')

async function login() {
	try {
		const response = await http('auth/signup', {
			method: 'POST',
			body: { email: email.value, password: password.value }
		})
		console.log(response)
	} catch (e) {
		console.log('Error: ', e)
	}
	console.log(email.value, password.value)
}
</script>

<template>
	<div class="sign-up">
		<authorisation-logo />
		<form @submit.prevent="login">
			<w-input email label="Email" v-model="email" />
			<w-input label="Password" v-model="password" />
			<button type="submit">Sign In</button>
		</form>

		<sign-up-link />
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

form {
	padding: 40px 40px 0;
	display: flex;
	gap: 16px;
	flex-direction: column;

	button {
		padding: 8px 16px;
	}
}
</style>
