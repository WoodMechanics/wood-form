import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './forms/HomePage.vue'
import AboutPage from './landing/AboutPage.vue'
import SignInPage from './authorisation/SignInPage.vue'
import NewForm from './form-editor/NewForm.vue'
import ConstructorPage from './form-editor/FormEditPage.vue'

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
			component: AboutPage
		},
		{
			path: '/sign-in',
			name: 'sign-in',
			component: SignInPage
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
		}
	]
})

export default router
