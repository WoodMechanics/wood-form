import vue3Rules from 'eslint-plugin-vue'

export const vueFlatPlugin = {
	configs: {},
	rules: vue3Rules.rules
}

export const rules = vue3Rules.configs['vue3-essential'].rules
