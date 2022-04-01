import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import store from './store'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import './index.css'


const app = Vue.createApp(App)
app.use(VueAxios, axios)

// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
