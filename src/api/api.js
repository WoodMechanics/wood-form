import { http } from './http.js'

export const api = {
	signup(email, password) {
		return http('/auth/signup', {
			method: 'POST',
			body: { email, password }
		})
	}
}
