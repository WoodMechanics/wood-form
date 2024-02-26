import vueParer from 'vue-eslint-parser'
import { vueFlatPlugin, rules as vueRules } from './custom-plugin/vue.js'

export default {
	files: ['src/**/*.vue'],
	languageOptions: {
		parser: vueParer
	},
	plugins: {
		vue: vueFlatPlugin
	},
	rules: {
		...vueRules,
		'vue/multi-word-component-names': 'off'
	}
}
