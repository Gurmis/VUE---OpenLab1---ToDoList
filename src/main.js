import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import router from './router/router.js'
import mitt from 'mitt'
import mocks from './plugins/w/moxios/'
import axios from "axios"
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Quasar } from 'quasar'


library.add(faRotateLeft)

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(store)
app.use(Quasar)
app.use(router)
.use(mocks, {
    routes: {
        'GET tasks': true,
        'POST tasks': true,
        'PUT tasks/(id)': true,
        // 'PUT tasks/1': true,
    }
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

