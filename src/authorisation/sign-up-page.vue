<script setup>
import { http } from '../api/http.js'
import { ref } from 'vue'
import WInput from './input/w-input.vue'
import SignInLink from './sign-in-link.vue'
import AuthorisationLogo from './authorisation-logo.vue'

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
		<authorisation-logo />
		<form @submit.prevent="register">
			<w-input label="Username" v-model="username" />
			<w-input email label="Email" v-model="email">
				<template v-slot:after> We recommend a work email address.</template>
			</w-input>
			<w-input label="Password" v-model="password">
				<template v-slot:after> Minimum length is 8 characters.</template>
			</w-input>
			<button type="submit">Register</button>
		</form>

		<sign-in-link />
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
