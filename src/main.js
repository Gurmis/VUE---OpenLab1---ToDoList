import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import router from './router/router.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
