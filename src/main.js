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

// app.use(axios)
// .use(mocks, {
//     routes: {
//         'GET tasks': true,
//         // Other routes
//     }
// })

app.use(router)
app.mount('#app')

