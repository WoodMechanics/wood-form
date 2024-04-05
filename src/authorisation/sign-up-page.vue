<script setup>
import { http } from '../api/http.js'
import { reactive, ref, watchEffect } from 'vue'
import WInput from './input/w-input.vue'
import SignInLink from './sign-in-link.vue'
import AuthorisationLogo from './authorisation-logo.vue'
import { api } from '../api/api.js'

const loading = ref(false)

const form = reactive({
	username: {
		value: '',
		status: true
	},
	email: {
		value: '',
		status: true
	},
	password: {
		value: '',
		status: true
	}
})

function markValid(key) {
	form[key].status = true
}

function markInvalid(key) {
	form[key].status = false
}

function validate(data) {
	return data && data.length > 0
}

function onInputValidation(key) {
	const value = form[key].value
	if (validate(value)) {
		markValid(key)
	}
}

function onChangeValidation(key) {
	const value = form[key].value
	if (validate(value)) {
		markValid(key)
	} else {
		markInvalid(key)
	}
}

async function register() {
	console.log(form)
	const [error, data, loading] = await api.signup(form.email.value, form.password.value)
	console.log([error, data, loading])
}
</script>

<template>
	<div class="sign-up">
		<authorisation-logo />
		<form @submit.prevent="register">
			<w-input
				v-model="form.username.value"
				autocomplete="username"
				label="Username"
				:status="form.username.status"
				@input="onInputValidation('username', $event)"
				@change="onChangeValidation('username', $event)"
			/>
			<w-input
				:status="form.email.status"
				autocomplete="email"
				type="email"
				label="Email"
				v-model="form.email.value"
			>
				<template v-slot:after> We recommend a work email address.</template>
			</w-input>
			<w-input
				:status="form.password.status"
				autocomplete="new-password"
				type="password"
				label="Password"
				v-model="form.password.value"
			>
				<template v-slot:after> Minimum length is 8 characters.</template>
			</w-input>
			<button :disabled="loading" type="submit">Register</button>
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
