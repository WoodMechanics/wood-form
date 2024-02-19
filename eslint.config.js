import js from '@eslint/js'
import base from './config/eslint/base.js'
import vueRules from './config/eslint/vue.js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [js.configs.recommended, base, vueRules, eslintConfigPrettier]
