import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import router from './router/router.js'
import mitt from 'mitt'
import mocks from './plugins/w/moxios/'
import axios from "axios"

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router)
.use(mocks, {
    routes: {
        'GET tasks': true,
        'POST tasks': true,
        // Other routes
    }
})
app.mount('#app')

