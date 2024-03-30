import { ofetch } from 'ofetch'

export const http = ofetch.create({ baseURL: 'https://api.wood-form.digital/' })
