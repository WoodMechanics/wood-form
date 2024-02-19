import vueParer from 'vue-eslint-parser'
import { vueFlatPlugin, rules as vueRules } from './custom-plugin/vue.js'
import {
	vueAccessibilityFlatPlugin,
	rules as vueAccessibilityRules
} from './custom-plugin/vue-accessibility.js'

export default {
	files: ['src/**/*.vue'],
	languageOptions: {
		parser: vueParer
	},
	plugins: {
		vue: vueFlatPlugin,
		'vuejs-accessibility': vueAccessibilityFlatPlugin
	},
	rules: {
		...vueRules,
		...vueAccessibilityRules,
		'vue/multi-word-component-names': 'off',
		'vuejs-accessibility/label-has-for': 'off'
	}
}
