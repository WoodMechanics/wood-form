import './styles/index.css'

import { createApp } from 'vue'
import App from './app.vue'
import router from './routes.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
