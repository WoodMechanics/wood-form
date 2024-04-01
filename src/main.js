import './styles/index.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './routes.js'
import { createHead } from 'unhead'

createHead()

const app = createApp(App)

app.use(router)

app.mount('#app')
