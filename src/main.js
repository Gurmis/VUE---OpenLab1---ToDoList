import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import router from './router/router.js'
import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(router)
app.mount('#app')

