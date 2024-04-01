import { useHead } from 'unhead'

export function useDevInTitle() {
	const { title } = document
	useHead({ title: import.meta.env.DEV ? '[DEV] ' + title : title })
}
