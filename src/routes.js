import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './forms/home-page.vue'
import LandingPage from './landing/landing-page.vue'
import NewForm from './form-editor/new-form.vue'
import ConstructorPage from './form-editor/form-edit-page.vue'
import SignUpPage from './authorisation/sign-up-page.vue'
import SignInPage from './authorisation/sign-in-page.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/about',
			name: 'about',
			component: LandingPage
		},
		{
			path: '/new-form',
			name: 'new-form',
			component: NewForm
		},
		{
			path: '/form/:id/edit',
			name: 'edit-form',
			component: ConstructorPage
		},
		{
			path: '/sign-in',
			name: 'sign-in',
			component: SignInPage
		},
		{
			path: '/sign-up',
			name: 'sign-up',
			component: SignUpPage
		}
	]
})

export default router
