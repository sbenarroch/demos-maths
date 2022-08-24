import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueMathjax from 'vue-mathjax-next'
const Mathjax = require('vue-mathjax-next');
const { mj } = Mathjax;

const app = createApp(App)
app.use(Mathjax)
app.use(store)
app.use(router)

app.mount('#app')
