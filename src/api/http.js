import { ofetch } from 'ofetch'

/**
 * @param {import('ofetch').FetchRequest} request
 * @param {import('ofetch').FetchOptions} [options]
 */
export async function http(request, options) {
	const httpBaseClient = ofetch.create({ baseURL: 'https://api.wood-form.digital/' })

	let error = null
	let data = null
	let loading = false

	try {
		loading = true
		data = await httpBaseClient(request, options)
	} catch (e) {
		error = e
	} finally {
		loading = false
	}

	return [error, data, loading]
}
