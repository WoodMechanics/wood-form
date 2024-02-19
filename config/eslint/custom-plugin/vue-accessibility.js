import vueAccessibility from 'eslint-plugin-vuejs-accessibility'

export const vueAccessibilityFlatPlugin = {
	configs: {},
	rules: vueAccessibility.rules
}

export const rules = vueAccessibility.configs.recommended.rules
